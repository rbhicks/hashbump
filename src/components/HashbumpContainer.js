import React, { Component } from 'react';
import PropTypes from 'prop-types';
import gql from 'graphql-tag';
import { graphql, compose, withApollo } from 'react-apollo';
import { connect } from 'react-redux';
import styled, { withTheme } from 'styled-components'
import { width, fontSize, color } from 'styled-system'
import { Flex,
         Box,
         Button,
         Absolute,
         Relative,
         Image,
         Input,
         Label,
         Text,
         Provider } from 'rebass'
import XRay from 'react-x-ray'
import hashtags from './hashtags.js'
import RawAutoSuggest from './AutoSuggest.js'
import TopHashtags from './TopHashtags.js'
import Header from './Header.js'
import BumpButton from './BumpButton.js'
import theme, {hashbumpColorGold, hashbumpColorGreen, hashbumpColorPurple} from './theme.js'


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
    options: (ownProps) => (
        {
            name: "hashtag",
            variables: {
                name: ownProps.currentHashtag.currentHashtag,
            }
        })
});

const topCountsOfAllTimeQuery = graphql(gql`
  query topCountsOfAllTime {
    topCountsOfAllTime
    {
      results {
         name
         count
         type
      }
    }
  }
`, {
    name: "topCountsOfAllTime",
});

const topCountsOfTodayQuery = graphql(gql`
  query topCountsOfToday {
    topCountsOfToday
    {
      results {
         name
         count
         type
      }
    }
  }
`, {
    name: "topCountsOfToday",
});

const bumpHashtagMutation = graphql(gql`
  mutation bumpHashtag($currentHashtag: String!, $bump: String!) {
    bumpHashtag(name: $currentHashtag, bump: $bump) {
      name
      yayCount
      grrrCount
      dunnoCount
      mehCount
    }
  }
`
, {
    name: "bumpHashtagMutation"
}
);

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
`, {
    name: "addHashtagMutation",
});


const AutoSuggest = graphql(gql`
  query suggestions($currentHashtag: String!, $finalizedSelection: Boolean!) {
    suggestions(currentHashtag: $currentHashtag, finalizedSelection: $finalizedSelection)
    {
      results {
         name
      }
    }
  }
`, {
    options: (ownProps) => (
        {        
        variables: {
            currentHashtag:     ownProps.value,
            finalizedSelection: ownProps.finalizedSelection,
        }
    })
})(RawAutoSuggest);

class HashbumpContainer extends Component {
    
    constructor(props) {
        super(props);

        this.selectedSuggestionHandler = this.selectedSuggestionHandler.bind(this);
        this.valueHandler              = this.valueHandler.bind(this);
        this.bumpHandler               = this.bumpHandler.bind(this);
    }
    
    selectedSuggestionHandler(selectedSuggestion) {
        this.props.dispatch({type:               'UPDATE_SELECTED_SUGGESTION',
                             selectedSuggestion: selectedSuggestion});
    }
    
    valueHandler(value, finalize = false) {
        const loweredValue = value.toLowerCase();
        
        this.props.dispatch({type:           'UPDATE_CURRENT_HASHTAG',
                             currentHashtag: loweredValue});

        this.props.dispatch({type:           'UPDATE_FINALIZED_SELECTION',
                             finalizedSelection: finalize});
    }

    bumpHandler(event, bumpType) {

        const hashtagData         = this.props.data;
        const bumpHashtagMutation = this.props.bumpHashtagMutation;
        const addHashtagMutation  = this.props.addHashtagMutation;
        const currentHashtag      = this.props.currentHashtag.currentHashtag;

        if (!hashtagData.hashtag) {
            addHashtagMutation({variables: {name: currentHashtag}})
                .then(hashtag => {
                    bumpHashtagMutation({variables: {currentHashtag: currentHashtag, bump: bumpType}}).
                        then(
                            () => {
                                hashtagData.refetch({name: currentHashtag});
                            });
                });
        }
        else {
            bumpHashtagMutation({variables: {currentHashtag: currentHashtag, bump: bumpType}}).
                then(
                    () => {
                       hashtagData.refetch({name: currentHashtag});
                    });
        }        
    }
    render() {        
        const { selectedSuggestion } = this.props.selectedSuggestion;
        const { finalizedSelection } = this.props.finalizedSelection;
        const { currentHashtag }     = this.props.currentHashtag;

        const currentHashtagCounts = this.props.data         &&
                                     this.props.data.hashtag ?
                                     this.props.data.hashtag : {
                                                                 yayCount: 0,
                                                                 grrrCount: 0,
                                                                 dunnoCount: 0,
                                                                 mehCount: 0};

        let topCountsOfAllTimeResults     = this.props.topCountsOfAllTime.topCountsOfAllTime         &&
                                            this.props.topCountsOfAllTime.topCountsOfAllTime.results ?
                                            this.props.topCountsOfAllTime.topCountsOfAllTime.results : [];
        let topCountsOfTodayResults       = this.props.topCountsOfToday.topCountsOfToday             &&
                                            this.props.topCountsOfToday.topCountsOfToday.results     ?
                                            this.props.topCountsOfToday.topCountsOfToday.results     : [];
        
        if (topCountsOfAllTimeResults.length == 4) {
            topCountsOfAllTimeResults = {
                [topCountsOfAllTimeResults[0].type]: {
                    name: topCountsOfAllTimeResults[0].name, count: topCountsOfAllTimeResults[0].count,},
                [topCountsOfAllTimeResults[1].type]: {
                    name: topCountsOfAllTimeResults[1].name, count: topCountsOfAllTimeResults[1].count,},
                [topCountsOfAllTimeResults[2].type]: {
                    name: topCountsOfAllTimeResults[2].name, count: topCountsOfAllTimeResults[2].count,},
                [topCountsOfAllTimeResults[3].type]: {
                    name: topCountsOfAllTimeResults[3].name, count: topCountsOfAllTimeResults[3].count,},};}
        else {
            topCountsOfAllTimeResults = {
                yay:   {name: "", count: 0,},
                grrr:  {name: "", count: 0,},
                dunno: {name: "", count: 0,},
                meh:   {name: "", count: 0,},};}
        if (topCountsOfTodayResults.length == 4) {
            topCountsOfTodayResults = {
                [topCountsOfTodayResults[0].type]: {
                    name: topCountsOfTodayResults[0].name, count: topCountsOfTodayResults[0].count,},
                [topCountsOfTodayResults[1].type]: {
                    name: topCountsOfTodayResults[1].name, count: topCountsOfTodayResults[1].count,},
                [topCountsOfTodayResults[2].type]: {
                    name: topCountsOfTodayResults[2].name, count: topCountsOfTodayResults[2].count,},
                [topCountsOfTodayResults[3].type]: {
                    name: topCountsOfTodayResults[3].name, count: topCountsOfTodayResults[3].count,},};}
        else {
            topCountsOfTodayResults = {
                yay:   {name: "", count: 0,},
                grrr:  {name: "", count: 0,},
                dunno: {name: "", count: 0,},
                meh:   {name: "", count: 0,},};}        
        
        return (
            <Provider theme={theme}>
              <Flex align='center' justify='center'>
                <Box width={[1, 2/3, 2/3, 2/3, 1/2]} bg={hashbumpColorGold}>
                  <Header />
                  <Flex wrap >
                    <TopHashtags title='Top Hashtags Ever'
                                 topYay={`${topCountsOfAllTimeResults["yay"].name}: ${topCountsOfAllTimeResults["yay"].count}`}
                                 topGrrr={`${topCountsOfAllTimeResults["grrr"].name}: ${topCountsOfAllTimeResults["grrr"].count}`}
                                 topDunno={`${topCountsOfAllTimeResults["dunno"].name}: ${topCountsOfAllTimeResults["dunno"].count}`}
                                 topMeh={`${topCountsOfAllTimeResults["meh"].name}: ${topCountsOfAllTimeResults["meh"].count}`} />
                    <TopHashtags title='Top Hashtags Today'
                                 topYay={`${topCountsOfTodayResults["yay"].name}: ${topCountsOfTodayResults["yay"].count}`}
                                 topGrrr={`${topCountsOfTodayResults["grrr"].name}: ${topCountsOfTodayResults["grrr"].count}`}
                                 topDunno={`${topCountsOfTodayResults["dunno"].name}: ${topCountsOfTodayResults["dunno"].count}`}
                                 topMeh={`${topCountsOfTodayResults["meh"].name}: ${topCountsOfTodayResults["meh"].count}`} />
                  </Flex>
                  <Flex align='center' justify='center' mt={1}>
                    <AutoSuggest
                       value={currentHashtag}
                       selectedSuggestion={selectedSuggestion}
                       selectedSuggestionHandler={this.selectedSuggestionHandler.bind(this)}
                       finalizedSelection={finalizedSelection}
                       valueHandler={this.valueHandler.bind(this)}
                       />
                  </Flex>
                  <Flex align='center' justify='center'>
                    <Box width={[1, 1/4, 1/4, 1/3, 1/3]} ml={[1, 0, 0, 0, 0]} mr={[1, 0, 0, 0, 0]}>
                      <Flex align='center' justify='center'>
                        <BumpButton bumpHandler={this.bumpHandler} bumpType='yay' buttonImageSource={theme.yaySvgSource} bumpCount={currentHashtagCounts.yayCount} />
                        <BumpButton bumpHandler={this.bumpHandler} bumpType='grrr' buttonImageSource={theme.grrrSvgSource} bumpCount={currentHashtagCounts.grrrCount} />
                        <BumpButton bumpHandler={this.bumpHandler} bumpType='dunno' buttonImageSource={theme.dunnoSvgSource} bumpCount={currentHashtagCounts.dunnoCount} />
                        <BumpButton bumpHandler={this.bumpHandler} bumpType='meh' buttonImageSource={theme.mehSvgSource} bumpCount={currentHashtagCounts.mehCount} />
                      </Flex>
                    </Box>      
                  </Flex>
                </Box>
              </Flex>
            </Provider>
        );
    }
}

export default compose(
    connect(state => ({ selectedSuggestion: state.selectedSuggestion,
                        finalizedSelection: state.finalizedSelection,
                        currentHashtag:     state.currentHashtag, })),
    hashtagQuery,
    topCountsOfAllTimeQuery,
    topCountsOfTodayQuery,
    bumpHashtagMutation,
    addHashtagMutation,
)(HashbumpContainer);

