import React from 'react';
import gql from 'graphql-tag';
import { graphql, compose, withApollo } from 'react-apollo';
import { connect } from 'react-redux';
import { setCurrentHashtag } from '../store/actions';
import Autocomplete from 'react-autocomplete';


import sass from '../styles.scss';

const suggestionsQuery = graphql(gql`
  query suggestions($partialHashtag: String!) {
    suggestions(partialHashtag: $partialHashtag)
  }
`, {
    name: "suggestionsQuery",
    options: (props) => ({
        variables: {partialHashtag: "!"}
    }),
});

const hashtagQuery = graphql(gql`
  query hashtag($name: String!) {
    hashtag(name: $name) {
      name
      yayCount
      grrrCount
      dunnoCount
      mehCount
    }
  }
`, {
    name: "hashtagQuery",
    options: (props) => ({
        variables: {name: "buffalo"}
    }),
});

class HashtagAutocomplete extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: '', items: []};

        this.handleSelect = this.handleSelect.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleGetItemValue = this.handleGetItemValue.bind(this);
        this.handleRenderItem = this.handleRenderItem.bind(this);
    }

    handleRenderItem(item, isHighlighted) {
        return (
            <div style={{ background: isHighlighted ? 'lightgray' : 'white' }} >
            {item.term}
            </div>
        );
    }

    handleGetItemValue(item) {
        return item.term;
    }
    
    handleChange(event) {
        const suggestionsQueryData = this.props.suggestionsQuery;
        const hashtagQueryData = this.props.hashtagQuery;
        const currentHashtagValue = event.target.value;

        this.props.dispatch(setCurrentHashtag(currentHashtagValue));
        this.setState({value: currentHashtagValue, items: this.state.items});

        // !!!!!!
        // ugly kludge: fix this so it has a proper type defined in the schema
        suggestionsQueryData.refetch({partialHashtag: currentHashtagValue})
            .then(dataObject => {
                const suggestions = JSON.parse(dataObject.data.suggestions[0])
                          .suggest
                          .analyzedSuggestion[`${currentHashtagValue}`]
                          .suggestions;
                this.setState({items: suggestions});
                this.props.dispatch(setCurrentHashtag(currentHashtagValue));
            }
        );                
    }

    handleSelect(val) {
        this.props.dispatch(setCurrentHashtag(val));
        this.setState({value: val})
    }

    render() {

        return (

            <span className={sass.hashtag}>
                <Autocomplete 
            getItemValue={this.handleGetItemValue}
            renderItem={this.handleRenderItem}
            items={this.state.items}
            value={this.state.value}
            onChange={this.handleChange}t
            onSelect={this.handleSelect}            
                />
                </span>
        );
    }
}

export default compose(
    connect(),
    hashtagQuery,
    suggestionsQuery,
)(HashtagAutocomplete);
