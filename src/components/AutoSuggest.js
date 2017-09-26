import React from 'react';
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

const AutoSuggest = (props) => {
    return (
        <Relative>
          <Input bg={props.theme.hashtagAutoSuggest.inputBg}
                 color={props.theme.hashtagAutoSuggest.inputFg}
                 pl={props.theme.hashtagAutoSuggest.inputPl}
                 pr={props.theme.hashtagAutoSuggest.inputPr}
                 pt={props.theme.hashtagAutoSuggest.inputPt}
                 pb={props.theme.hashtagAutoSuggest.inputPb}
                 ml={props.theme.hashtagAutoSuggest.inputMl}
                 mr={props.theme.hashtagAutoSuggest.inputMr}
                 mt={props.theme.hashtagAutoSuggest.inputMt}
                 mb={props.theme.hashtagAutoSuggest.inputMb}
                 style={{overflow: 'hidden',
                         border: props.theme.hashtagAutoSuggest.inputBorder,
                         borderRadius: props.theme.hashtagAutoSuggest.inputBorderRadius}}
                 value={props.value}
                 onChange={(event) => {
                     props.valueHandler(event.target.value);
                 }}
                 onKeyDown={props.onKeyDownSuggestionsHandler}
                 />
              <_Suggestions
                 suggestions={props.suggestions}
                 onClickSuggestions={(event) => {
                     props.suggestionsHandler(null);
                     props.valueHandler(event.target.innerText, true);
                 }}
                 onMouseOverSuggestions={props.onMouseOverSuggestionsHandler}
                 />
        </Relative>
    );
}

export default withTheme(AutoSuggest);
