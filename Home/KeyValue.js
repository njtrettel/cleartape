import React from 'react';
import { View, Text } from 'react-native';

const style = {
  container: {
    flexDirection: 'row'
  },
  keyName: {
    textAlign: 'right',
    fontSize: 16,
    width: 85,
    // flex: 1,
    color: 'grey'
  },
  value: {
    flex: 1,
    textAlign: 'left',
    fontSize: 16,
    marginLeft: 16
  }
};

const toUpper = string => `${string.charAt(0).toUpperCase()}${string.slice(1)}`

const KeyValue = ({ keyName, value }) => (
  <View animation="bounceIn" duration={400} style={style.container}>
    <Text style={style.keyName}>{toUpper(keyName)}</Text>
    <Text style={style.value}>{value}</Text>
  </View>
);

export default KeyValue;
