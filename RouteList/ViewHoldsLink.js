import React from 'react';
import { TouchableHighlight, Text } from 'react-native';
import { withNavigation } from 'react-navigation';
import { HOLDS_BUTTON_COLOR, SCREEN_BACKGROUND_COLOR } from '../style';

const style = {
  padding: 5,
  borderRadius: 5,
  marginTop: 8,
  backgroundColor: SCREEN_BACKGROUND_COLOR
};

const ViewHoldsLink = (props) => {
  const { navigation, holds, style: textStyle, children } = props;
  return (
    <TouchableHighlight
      underlayColor={HOLDS_BUTTON_COLOR}
      style={style}
      onPress={() => navigation.navigate('ViewHolds', { holds })}
    >
      <Text style={textStyle}>{children}</Text>
    </TouchableHighlight>
  );
};

export default withNavigation(ViewHoldsLink);
