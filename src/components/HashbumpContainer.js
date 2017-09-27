import React, { Component } from 'react';
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


@connect(state => ({ suggestions: state.suggestions,
                     value:       state.value, }))
export default class HashbumpContainer extends Component {

    constructor(props) {
        super(props);

        this.suggestionsHandler            = this.suggestionsHandler.bind(this);
        this.valueHandler                  = this.valueHandler.bind(this);
        this.onKeyDownSuggestionsHandler   = this.onKeyDownSuggestionsHandler.bind(this);
        this.onMouseOverSuggestionsHandler = this.onMouseOverSuggestionsHandler.bind(this);
    }

    onMouseOverSuggestionsHandler(event) {
        this.props.dispatch({type: 'CHANGE_SELECTION_ON_MOUSEOVER',
                             name: event.target.innerText});
    }

    onKeyDownSuggestionsHandler(event) {

        const {suggestions}   = this.props.suggestions;

        if(!suggestions) return;
        
        const {value}         = this.props.value;
        const selectionExists = suggestions.find(item => {return item.selected === true;});

        switch(event.keyCode) {
        // up
        case 38:
            this.props.dispatch({type: 'MOVE_SUGGESTION_SELECTION_BY_ARROWS',
                                 subtype: 'UP'});
            break;
        // down
        case 40:
            this.props.dispatch({type: 'MOVE_SUGGESTION_SELECTION_BY_ARROWS',
                                 subtype: 'DOWN'});
            break;
        // enter
        case 13:
            if(selectionExists) {
                suggestions.find((item) => {
                    if(item.selected === true) {
                        this.valueHandler(item.name, true);
                        return true;
                    }
                });
            }
            else if(value) {
                this.valueHandler(value, true);
            }            
            this.suggestionsHandler(null);

            break;
            // esc
        case 27:
            this.suggestionsHandler(null);
            this.valueHandler("", true);
            break;
        }
    }

    suggestionsHandler(suggestions) {
        this.props.dispatch({type:        'UPDATE_SUGGESTIONS',
                             suggestions: suggestions});
    }

    valueHandler(value, finalize = false) {
        this.props.dispatch({type:  'UPDATE_VALUE',
                             value: value});

        if(!finalize) {
            if(value !== '') {
                const loweredValue = value.toLowerCase();
                const suggestions  = hashtags.filter(hashtag => hashtag.name.toLowerCase().startsWith(loweredValue));
                
                this.suggestionsHandler(suggestions);
            }
            else {
                this.suggestionsHandler(null);
            }
        }
    }

    render() {
        const { suggestions } = this.props.suggestions;
        const { value }       = this.props.value;

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
                       suggestions={suggestions}
                       value={value}
                       suggestionsHandler={this.suggestionsHandler.bind(this)}
                       valueHandler={this.valueHandler.bind(this)}
                       onKeyDownSuggestionsHandler={this.onKeyDownSuggestionsHandler.bind(this)}
                       onMouseOverSuggestionsHandler={this.onMouseOverSuggestionsHandler.bind(this)}
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
