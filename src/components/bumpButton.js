import React from 'react';
import { withTheme } from 'styled-components'
import { Flex,
         Box,
         Image,
         Text} from 'rebass'

const _BumpButton = (props) => {
    return (
        <Box bumpType={props.bumpType} p={props.theme.bumpButton.boxP} width={props.theme.bumpButton.width}>
          <Image display={props.theme.bumpButton.imageDisplay} src={props.buttonImageSource}  /><Text center={true} color={props.theme.bumpButton.color} fontSize={props.theme.bumpButton.fontSize}>{props.bumpCount}</Text>
        </Box>
    );
}

export default withTheme(_BumpButton);
