import React from 'react';
import { withTheme } from 'styled-components'
import { Flex,
         Box,
         Image,
         Label} from 'rebass'
import XRay from 'react-x-ray'

const _Header = (props) => {
    return (
        <Flex>
          <Image display={props.theme.header.logoImageDisplay}
                 width={props.theme.header.logoImageWidth}
                 src={props.theme.hashbumpLogoSvgSource}/>
          <Box ml={props.theme.header.nameBoxMl}
               pr={props.theme.header.nameBoxPr}
               pt={props.theme.header.nameBoxPt}>
            <Flex>
              <Label display={props.theme.header.nameLabelDisplay}
                     fontSize={props.theme.header.nameLabelFontSize}
                     color={props.theme.header.nameLabelLeftColor}>
                hash
              </Label>
              <Label display={props.theme.header.nameLabelDisplay}
                     fontSize={props.theme.header.nameLabelFontSize}
                     color={props.theme.header.nameLabelRightColor}>
                bump
              </Label>
            </Flex>
          </Box>
        </Flex>
    );
}

export default withTheme(_Header);
