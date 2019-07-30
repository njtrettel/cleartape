import React from 'react';
import { View } from 'react-native';
import Holds from './Holds';

const ViewHolds = (props) => {
  const { navigation } = props;
  const holds = navigation.getParam('holds');
  return (
    <View style={{ flex: 1 }}>
      <Holds holds={holds} />
    </View>
  );
};


class Screen extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return <ViewHolds {...this.props} />;
  }
}

export default Screen;
