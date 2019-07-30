import React from 'react';
import { View, Button, Text } from 'react-native';
import SetRouteForm from './SetRouteForm';
import { SCREEN_BACKGROUND_COLOR } from '../style';

const style = {
  flex: 1,
  padding: 32,
  backgroundColor: SCREEN_BACKGROUND_COLOR
};

class SetRoute extends React.Component {
  static navigationOptions = {
    title: 'Set Route'
  };

  render() {
    return (
      <View style={style}>
        <SetRouteForm navigation={this.props.navigation} />
      </View>
    );
  }
}

export default SetRoute;
