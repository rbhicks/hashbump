import React from 'react';
import gql from 'graphql-tag';
import { graphql, compose, withApollo } from 'react-apollo';
import { connect } from 'react-redux';
import { setCurrentHashtagName } from '../store/actions';
import Autocomplete from 'react-autocomplete';


import sass from '../styles.scss';

const suggestionsQuery = graphql(gql`
  query suggestions($partialHashtag: String!) {
    suggestions(partialHashtag: $partialHashtag)
  }
`, {
    name: "suggestionsQuery",
    options: {
        variables: {partialHashtag: "!"}
    },
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
    options: {
        variables: {name: ""}
    },
});

const addHashtagMutation = graphql(gql`
  mutation addHashtag($name: String!) {
    addHashtag(name: $name) {
      name
      yayCount
      grrrCount
      dunnoCount
      mehCount
    }
  }
`);

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
        const suggestionsQuery = this.props.suggestionsQuery;
        const hashtagQuery = this.props.hashtagQuery;
        const currentHashtagName = event.target.value;

        this.props.dispatch(setCurrentHashtagName(currentHashtagName));
        this.setState({value: currentHashtagName, items: this.state.items});

        suggestionsQuery.refetch({partialHashtag: currentHashtagName})
            .then(dataObject => {
                const suggestions = JSON.parse(dataObject.data.suggestions[0])
                          .suggest
                          .analyzedSuggestion[`${currentHashtagName}`]
                          .suggestions;

                hashtagQuery.refetch({name: currentHashtagName})
                    .then(dataObject => {
                        if (dataObject.data.hashtag) {
                            this.props.dispatch(setCurrentHashtagName(dataObject.data.hashtag.name));
                        }
                        else {                            
                            this.props.dispatch(setCurrentHashtagName(currentHashtagName));
                        }
                        this.setState({items: suggestions});
                    });
            }
        );        
    }

    handleSelect(val) {
        const hashtagQuery = this.props.hashtagQuery;
        
        hashtagQuery.refetch({name: val})
            .then(dataObject => {
                if (dataObject.data.hashtag) {                    
                    this.props.dispatch(setCurrentHashtagName(dataObject.data.hashtag.name));
                }
                else {
                    this.props.dispatch(setCurrentHashtagName(val));
                }
            });
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
    addHashtagMutation,
)(HashtagAutocomplete);
