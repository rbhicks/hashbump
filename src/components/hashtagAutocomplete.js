import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { connect } from 'react-redux';
import { setCurrentHashtag } from '../store/actions';
import Autocomplete from 'react-autocomplete';


import sass from '../styles.scss';

const query = gql`
  query suggestions($partialHashtag: String!) {
    suggestions(partialHashtag: $partialHashtag)
  }
`;

@connect()
@graphql(query, {options: {variables: {partialHashtag: "!"}}})
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
        let graphqlData = this.props.data;
        const currentHashtagValue = event.target.value;

        this.props.dispatch(setCurrentHashtag(currentHashtagValue));
        this.setState({value: currentHashtagValue, items: this.state.items});

        // this value is strange:
        // returning the promise directly doesn't work
        // only returning the text string inside a promise
        // works
        // this then has to be parsed on this side within the promise
        // handler. it seems like the promise mechanism isn't quite
        // working with refetch and apollo
        graphqlData.refetch({partialHashtag: currentHashtagValue})
            .then(dataObject => {
                const suggestions = JSON.parse(dataObject.data.suggestions[0])
                          .suggest
                          .analyzedSuggestion[`${currentHashtagValue}`]
                          .suggestions;
                this.setState({value: this.state.value, items: suggestions});
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

export default HashtagAutocomplete;
