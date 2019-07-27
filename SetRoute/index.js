import React from 'react';
import { View, Button, Text } from 'react-native';
import SetRouteForm from './SetRouteForm';

const style = {
  flex: 1,
  padding: 32,
  backgroundColor: 'rgba(194, 233, 251, .25)'
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
