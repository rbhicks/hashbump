import React from 'react';
import { withTheme } from 'styled-components'
import { Flex,
         Box,
         Image,
         Label} from 'rebass'

const _TopHashtags = (props) => {
    return (
        <Box width={props.theme.topHashtags.boxWidth}
             pl={props.theme.topHashtags.boxPl}
             pr={props.theme.topHashtags.boxPr}
             pt={props.theme.topHashtags.boxPt}>
          <Label is={props.theme.topHashtags.labelIs}
                 fontSize={props.theme.topHashtags.labelFontSize}
                 pb={props.theme.topHashtags.labelPb}
                 color={props.theme.topHashtags.labelColor}>
            {props.title}
          </Label>                      
          <Flex align={props.theme.topHashtags.flexAlign}>
            <Image display={props.theme.topHashtags.inlineImageDisplay}
                   width={props.theme.topHashtags.inlineImageWidth}
                   src={props.theme.yaySvgSource} />
            <Box display={props.theme.topHashtags.infoBoxDisplay}
                 fontSize={props.theme.topHashtags.infoBoxFontSize}
                 color={props.theme.topHashtags.infoBoxColor}
                 pl={props.theme.topHashtags.infoBoxPl}>
              {props.topYay}
            </Box>
          </Flex>
          <Flex align={props.theme.topHashtags.flexAlign}>
            <Image display={props.theme.topHashtags.inlineImageDisplay}
                   width={props.theme.topHashtags.inlineImageWidth}
                   src={props.theme.grrrSvgSource} />
            <Box display={props.theme.topHashtags.infoBoxDisplay}
                 fontSize={props.theme.topHashtags.infoBoxFontSize}
                 color={props.theme.topHashtags.infoBoxColor}
                 pl={props.theme.topHashtags.infoBoxPl}>
              {props.topGrrr}
            </Box>
          </Flex>
          <Flex align={props.theme.topHashtags.flexAlign}>
            <Image display={props.theme.topHashtags.inlineImageDisplay}
                   width={props.theme.topHashtags.inlineImageWidth}
                   src={props.theme.dunnoSvgSource} />
            <Box display={props.theme.topHashtags.infoBoxDisplay}
                 fontSize={props.theme.topHashtags.infoBoxFontSize}
                 color={props.theme.topHashtags.infoBoxColor}
                 pl={props.theme.topHashtags.infoBoxPl}>
              {props.topDunno}
            </Box>
          </Flex>
          <Flex align={props.theme.topHashtags.flexAlign}>
            <Image display={props.theme.topHashtags.inlineImageDisplay}
                   width={props.theme.topHashtags.inlineImageWidth}
                   src={props.theme.mehSvgSource} />
            <Box display={props.theme.topHashtags.infoBoxDisplay}
                 fontSize={props.theme.topHashtags.infoBoxFontSize}
                 color={props.theme.topHashtags.infoBoxColor}
                 pl={props.theme.topHashtags.infoBoxPl}>
              {props.topMeh}
            </Box>
          </Flex>
        </Box>
    );
}

export default withTheme(_TopHashtags);
