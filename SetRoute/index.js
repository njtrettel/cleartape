import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
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

SetRoute.propTypes = {
  navigation: PropTypes.object.isRequired
};

export default SetRoute;
