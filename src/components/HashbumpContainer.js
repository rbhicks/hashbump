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

const topCountsOfTheLastWeekQuery = graphql(gql`
  query topCountsOfTheLastWeek {
    topCountsOfTheLastWeek
    {
      results {
         name
         count
         type
      }
    }
  }
`, {
    name: "topCountsOfTheLastWeek",
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
        let topCountsOfTheLastWeekResults = this.props.topCountsOfTheLastWeek.topCountsOfTheLastWeek         &&
                                            this.props.topCountsOfTheLastWeek.topCountsOfTheLastWeek.results ?
                                            this.props.topCountsOfTheLastWeek.topCountsOfTheLastWeek.results : [];
        
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
        if (topCountsOfTheLastWeekResults.length == 4) {
            topCountsOfTheLastWeekResults = {
                [topCountsOfTheLastWeekResults[0].type]: {
                    name: topCountsOfTheLastWeekResults[0].name, count: topCountsOfTheLastWeekResults[0].count,},
                [topCountsOfTheLastWeekResults[1].type]: {
                    name: topCountsOfTheLastWeekResults[1].name, count: topCountsOfTheLastWeekResults[1].count,},
                [topCountsOfTheLastWeekResults[2].type]: {
                    name: topCountsOfTheLastWeekResults[2].name, count: topCountsOfTheLastWeekResults[2].count,},
                [topCountsOfTheLastWeekResults[3].type]: {
                    name: topCountsOfTheLastWeekResults[3].name, count: topCountsOfTheLastWeekResults[3].count,},};}
        else {
            topCountsOfTheLastWeekResults = {
                yay:   {name: "", count: 0,},
                grrr:  {name: "", count: 0,},
                dunno: {name: "", count: 0,},
                meh:   {name: "", count: 0,},};}        
        
        return (
            <Provider theme={theme}>
              <Flex align='center' justify='center'>
                <Box width={[1, 1, 1/2]} bg={hashbumpColorGold}>
                  <Header />
                  <Flex wrap ml={2, 2, 2}>
                    <TopHashtags title='Top Hashtags Ever'
                                 topYay={`${topCountsOfAllTimeResults["yay"].name}: ${topCountsOfAllTimeResults["yay"].count}`}
                                 topGrrr={`${topCountsOfAllTimeResults["grrr"].name}: ${topCountsOfAllTimeResults["grrr"].count}`}
                                 topDunno={`${topCountsOfAllTimeResults["dunno"].name}: ${topCountsOfAllTimeResults["dunno"].count}`}
                                 topMeh={`${topCountsOfAllTimeResults["meh"].name}: ${topCountsOfAllTimeResults["meh"].count}`} />
                    <TopHashtags title='Top Hashtags Today'
                                 topYay={`${topCountsOfTheLastWeekResults["yay"].name}: ${topCountsOfTheLastWeekResults["yay"].count}`}
                                 topGrrr={`${topCountsOfTheLastWeekResults["grrr"].name}: ${topCountsOfTheLastWeekResults["grrr"].count}`}
                                 topDunno={`${topCountsOfTheLastWeekResults["dunno"].name}: ${topCountsOfTheLastWeekResults["dunno"].count}`}
                                 topMeh={`${topCountsOfTheLastWeekResults["meh"].name}: ${topCountsOfTheLastWeekResults["meh"].count}`} />
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
                    <Box width={[1, 1/4, 1/3]} ml={[1, 0, 0]} mr={[1, 0, 0]}>
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
    topCountsOfTheLastWeekQuery,
    bumpHashtagMutation,
    addHashtagMutation,
)(HashbumpContainer);

