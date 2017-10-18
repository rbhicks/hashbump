import React, { PureComponent } from 'react';
import { withTheme } from 'styled-components'
import { Flex,
         Box,
         Button,
         Absolute,
         Relative,
         Provider,
         Input } from 'rebass'

const __Suggestions = (props) => {

    const hasSuggestions = props.suggestions && props.suggestions.length !==0;

    if (!hasSuggestions) {
        return null;
    }
        
    return (
        <Absolute width={[1]} pl={[1]}>
          {props.suggestions.map(item => <Box onClick={props.onClickSuggestions}
                                              onMouseOver={props.onMouseOverSuggestions}
                                              color={props.theme.hashtagAutoSuggest.suggestionBoxFg}
                                              bg={item.selected ? props.theme.hashtagAutoSuggest.suggestionBoxSelectedBg
                                                                : props.theme.hashtagAutoSuggest.suggestionBoxBg}
                                              key={item.name}
                                              pl={props.theme.hashtagAutoSuggest.suggestionBoxPl}
                                              pr={props.theme.hashtagAutoSuggest.suggestionBoxPr}
                                              pt={props.theme.hashtagAutoSuggest.suggestionBoxPt}
                                              pb={props.theme.hashtagAutoSuggest.suggestionBoxPb}
                                              ml={props.theme.hashtagAutoSuggest.suggestionBoxMl}
                                              mr={props.theme.hashtagAutoSuggest.suggestionBoxMr}
                                              mt={props.theme.hashtagAutoSuggest.suggestionBoxMt}
                                              mb={props.theme.hashtagAutoSuggest.suggestionBoxMb}                                              
                                              style={{overflow: 'hidden'}}
                                              >
                                                {item.name}
                                         </Box>)}
	</Absolute>
    );
}

const _Suggestions = withTheme(__Suggestions);

class AutoSuggest extends PureComponent {

    constructor(props) {
        super(props);

        this.onKeyDownSuggestionsHandler   = this.onKeyDownSuggestionsHandler.bind(this);
        this.onMouseOverSuggestionsHandler = this.onMouseOverSuggestionsHandler.bind(this);
    }

    onMouseOverSuggestionsHandler(event) {

        const suggestions = [];

        this.props.suggestions.forEach((item, i) => {suggestions[i] = Object.assign({}, item)});
                          
        suggestions.forEach(item => {
            if(item.selected === true) item.selected = false;
            if(item.name === event.target.innerText) {
                item.selected = true;
            }
        });
        this.props.suggestionsHandler(suggestions);
    }

    onKeyDownSuggestionsHandler(event) {

        if (!this.props.suggestions) return;
        
        const suggestions = [];

        this.props.suggestions.forEach((item, i) => {suggestions[i] = Object.assign({}, item)});

        const {value}         = this.props.value;
        const selectionExists = suggestions &&
                                suggestions.find(item => {return item.selected === true;});

        switch(event.keyCode) {
        // up
        case 38:
            if(selectionExists) {
                suggestions.find((item, i) => {
                    if(item.selected === true && i > 0) {
                        item.selected = false;
                        suggestions[i-1].selected = true;
                        return true;
                    }
                });
            }
            else if(suggestions) {
                suggestions[0].selected = true;                             
            }
            this.props.suggestionsHandler(suggestions);
            break;
        // down
        case 40:
            if(selectionExists) {
                suggestions.find((item, i) => {
                    if(item.selected === true && i < suggestions.length - 1) {
                        item.selected = false;
                        suggestions[i+1].selected = true;
                        return true;
                    }
                });                             
            }
            else if(suggestions) {
                suggestions[0].selected = true;
            }
            this.props.suggestionsHandler(suggestions);
            break;
        // enter
        case 13:
            if(selectionExists) {
                suggestions.find((item) => {
                    if(item.selected === true) {
                        item.selected = false;
                        this.props.valueHandler(item.name, true);
                        return true;
                    }
                });                             
            }
            else if(value) {
                this.props.valueHandler(value, true);
            }
            this.props.suggestionsHandler(null);
            break;
        // esc
        case 27:
            this.props.suggestionsHandler(null);
            this.props.valueHandler("", true);
            break;
        }
    }

    render () {

        // console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");
        // console.log(this.props.data.suggestions);
        // console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");

        const suggestions = this.props.data.suggestions ? this.props.data.suggestions.results : [];
        
        return (
            <Relative>
              <Input bg={this.props.theme.hashtagAutoSuggest.inputBg}
                     color={this.props.theme.hashtagAutoSuggest.inputFg}
                     pl={this.props.theme.hashtagAutoSuggest.inputPl}
                     pr={this.props.theme.hashtagAutoSuggest.inputPr}
                     pt={this.props.theme.hashtagAutoSuggest.inputPt}
                     pb={this.props.theme.hashtagAutoSuggest.inputPb}
                     ml={this.props.theme.hashtagAutoSuggest.inputMl}
                     mr={this.props.theme.hashtagAutoSuggest.inputMr}
                     mt={this.props.theme.hashtagAutoSuggest.inputMt}
                     mb={this.props.theme.hashtagAutoSuggest.inputMb}
                     style={{overflow:     'hidden',
                             border:       this.props.theme.hashtagAutoSuggest.inputBorder,
                             borderRadius: this.props.theme.hashtagAutoSuggest.inputBorderRadius}}
                     value={this.props.value}
                     onChange={(event) => {
                         this.props.valueHandler(event.target.value);
                     }}
                     onKeyDown={this.onKeyDownSuggestionsHandler}
                     />
                <_Suggestions
                   //                   suggestions={this.props.suggestions}
                   suggestions={suggestions}
                   onClickSuggestions={(event) => {
                       this.props.suggestionsHandler(null);
                       this.props.valueHandler(event.target.innerText, true);
                   }}
                   onMouseOverSuggestions={this.onMouseOverSuggestionsHandler}
                  />
            </Relative>
        );
    }
}

export default withTheme(AutoSuggest);
