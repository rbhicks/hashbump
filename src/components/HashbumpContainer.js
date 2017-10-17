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
import AutoSuggest from './AutoSuggest.js'
import TopHashtags from './TopHashtags.js'
import Header from './Header.js'
import BumpButton from './BumpButton.js'
import theme, {hashbumpColorGold, hashbumpColorGreen, hashbumpColorPurple} from './theme.js'


const suggestionsQuery = graphql(gql`
  query suggestions($partialHashtag: String!) {
    suggestions(partialHashtag: $partialHashtag)
  }
`, {
    name: "suggestionsQuery",
    options: {
        variables: {partialHashtag: ""}
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

// can I pull all the redux code?: suggestions come
// from apollo, currenthashtag is only changed from
// ui events and only used to update ui (?)...if
// this is true, can apollo fetch the suggestions when
// valueHandler is called?...wait...with this get stuck
// with the Input disappearing?

// @connect(state => ({ suggestions:    state.suggestions,
//                      currentHashtag: state.currentHashtag, }))
// @graphql(hashtagQuery)
// @graphql(suggestionsQuery)
// @graphql(addHashtagMutation)
// export default class HashbumpContainer extends Component {
class HashbumpContainer extends Component {

    static propTypes = {
        data: PropTypes.shape({
            suggestions: PropTypes.shape({
                results: PropTypes.arrayOf(
                    PropTypes.shape({
                        name: PropTypes.string,
                        selected: PropTypes.bool,
                    })),
                partialValue: PropTypes.string,
            }),
        }),
    };

    static defaultProps = {
        data: {
            suggestions: {
                results: [{name: 'jean', selected: false}, {name: 'babtiste', selected: false}, {name: 'emanuel', selected: false}, {name: 'zorg', selected: false} ],
                partialValue: 'ack',
                // results: [],
                // partialValue: '',
            },
        },
    };
            
    // constructor(props) {
    //     super(props);

    //     this.suggestionsHandler = this.suggestionsHandler.bind(this);
    //     this.valueHandler       = this.valueHandler.bind(this);
    // }

    suggestionsHandler(suggestions) {
        // this.props.dispatch({type:        'UPDATE_SUGGESTIONS',
        //                      suggestions: suggestions});
    }

    valueHandler(value, finalize = false) {
        // this.props.dispatch({type:           'UPDATE_CURRENT_HASHTAG',
        //                      currentHashtag: value});


        if(!finalize) {
            if(value !== '') {
                const loweredValue = value.toLowerCase();
                // const suggestions  = hashtags.filter(hashtag => hashtag.name.toLowerCase().startsWith(loweredValue));
                
                // this.suggestionsHandler(suggestions);
            }
            else {
                // this.suggestionsHandler(null);
            }
        }
    }

    render() {
        const { suggestions } = this.props.data;

        return (
            <Provider theme={theme}>
              <Flex align='center' justify='center'>
                <Box width={[1, 1, 1/2]} bg={hashbumpColorGold}>
                  <Header />
                  <Flex wrap>
                    <TopHashtags title='Top Hashtags Ever'
                                 topYay='#anoctopusandamoose: 7'
                                 topGrrr='#anoctopusandamoose: 11'
                                 topDunno='#anoctopusandamoose: 13'
                                 topMeh='#anoctopusandamoose: 17' />
                    <TopHashtags title='Top Hashtags This Week'
                                 topYay='#anoctopusandamoose: 17'
                                 topGrrr='#anoctopusandamoose: 13'
                                 topDunno='#anoctopusandamoose: 11'
                                 topMeh='#anoctopusandamoose: 7' />
                  </Flex>
                  <Flex align='center' justify='center'>
                    <AutoSuggest
                       suggestions={suggestions.results}
                       value={suggestions.partialValue}
                       suggestionsHandler={this.suggestionsHandler.bind(this)}
                       valueHandler={this.valueHandler.bind(this)}
                       />
                  </Flex>
                  <Flex align='center' justify='center'>
                    <Box width={[1, 1/4, 1/3]} ml={[1, 0, 0]} mr={[1, 0, 0]}>
                      <Flex align='center' justify='center'>
                        <BumpButton bumpType='yay' buttonImageSource={theme.yaySvgSource} bumpCount='17' />
                        <BumpButton bumpType='grrr' buttonImageSource={theme.grrrSvgSource} bumpCount='17' />
                        <BumpButton bumpType='dunno' buttonImageSource={theme.dunnoSvgSource} bumpCount='17' />
                        <BumpButton bumpType='meh' buttonImageSource={theme.mehSvgSource} bumpCount='17' />
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
    hashtagQuery,
    suggestionsQuery,
    addHashtagMutation,
)(HashbumpContainer);
