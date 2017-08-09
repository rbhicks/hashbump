import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { connect } from 'react-redux';
import { setCurrentHashtag } from '../store/actions';
import Autocomplete from 'react-autocomplete';


///////////////////////////////
///////////////////////////////
//add hashtag creation handling
///////////////////////////////
///////////////////////////////



const query = gql`
  query suggestions($partialHashtag: String!) {
    suggestions(partialHashtag: $partialHashtag)
  }
`;

@connect(state => ({ currentHashtag: state.currentHashtag }))
@graphql(query, {options: {variables: {partialHashtag: "!"}}})
class HashtagForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: '', items: []};

        this.handleSubmit = this.handleSubmit.bind(this);
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
        let data = this.props.data;
        const currentHashtagValue = event.target.value;


        this.setState({value: currentHashtagValue, items: this.state.items});

        // this value is strange:
        // returning the promise directly doesn't work
        // only returning the text string inside a promise
        // works
        // this then has to be parsed on this side within the promise
        // handler. it seems like the promise mechanism isn't quite
        // working with refetch and apollo
        data.refetch({partialHashtag: currentHashtagValue})
            .then(dataObject => {
                const suggestions = JSON.parse(dataObject.data.suggestions[0])
                          .suggest
                          .analyzedSuggestion[`#${currentHashtagValue}`]
                          .suggestions;
                this.setState({value: this.state.value, items: suggestions});
            }
                 );
    }

    handleSubmit(event) {
        this.props.dispatch(this.state.value);
        event.preventDefault();
    }    
    render() {


//                        <input type="text" onChange={this.handleChange} />
// ****************************************************************
// ****************************************************************
// add # via content style!
// ****************************************************************
// ****************************************************************
        return (
                <Autocomplete 
            getItemValue={this.handleGetItemValue}
            renderItem={this.handleRenderItem}
            items={this.state.items}
            value={this.state.value}
            onChange={this.handleChange}
            onSelect={(val) => value = val}
                />
        );
    }
}

export default HashtagForm;
