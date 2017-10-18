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
                                              bg={item.name == props.selectedSuggestion ? props.theme.hashtagAutoSuggest.suggestionBoxSelectedBg
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
        this.props.selectedSuggestionHandler(event.target.innerText);
    }

    onKeyDownSuggestionsHandler(event) {
        if (!this.props.data.suggestions) return;        

        const {value}         = this.props.value;
        let   selectedSuggestion = this.props.selectedSuggestion;
        const selectionExists    = selectedSuggestion != "";
        const suggestions        = this.props.data.suggestions.results;
                                

        switch(event.keyCode) {
        // up
        case 38:
            if(selectionExists) {
                suggestions.find((item, i) => {
                    if(item.name === selectedSuggestion && i > 0) {
                        selectedSuggestion = suggestions[i-1].name;
                        return true;
                    }
                });
            }
            else if(suggestions) {
                selectedSuggestion = suggestions[0].name;
            }
            this.props.selectedSuggestionHandler(selectedSuggestion);
            break;
        // down
        case 40:
            if(selectionExists) {
                suggestions.find((item, i) => {
                    if(item.name === selectedSuggestion && i < suggestions.length - 1) {
                        selectedSuggestion = suggestions[i+1].name;
                        return true;
                    }
                });                             
            }
            else if(suggestions) {
                selectedSuggestion = suggestions[0].name;
            }
            this.props.selectedSuggestionHandler(selectedSuggestion);
            break;
        // enter
        case 13:
            if(selectionExists) {
                this.props.valueHandler(selectedSuggestion, true);
            }
            else if(value) {
                this.props.valueHandler(value, true);
            }
            this.props.selectedSuggestionHandler("");
            break;
        // esc
        case 27:
            this.props.selectedSuggestionHandler("");
            this.props.valueHandler("", true);
            break;
        }
    }

    render () {
        let suggestions = this.props.data.suggestions &&
                          this.props.data.suggestions.results ?
                          this.props.data.suggestions.results : [];

        if((suggestions.length == 1) &&
           (suggestions[0].name == this.props.value)) {
            suggestions = [];
        }
        
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
                   suggestions={suggestions}
                   selectedSuggestion={this.props.selectedSuggestion}
                   onClickSuggestions={(event) => {
                       this.props.selectedSuggestionHandler("");
                       this.props.valueHandler(event.target.innerText, true);
                   }}
                   onMouseOverSuggestions={this.onMouseOverSuggestionsHandler}
                  />
            </Relative>
        );
    }
}

export default withTheme(AutoSuggest);
