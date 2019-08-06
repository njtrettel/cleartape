import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';

const style = {
  container: {
    flexDirection: 'row'
  },
  keyName: {
    textAlign: 'right',
    fontSize: 16,
    width: 83,
    color: 'grey',
    marginRight: 16
  },
  value: {
    flex: 1,
    textAlign: 'left',
    fontSize: 16
  }
};

const toUpper = string => `${string.charAt(0).toUpperCase()}${string.slice(1)}`;

const KeyValue = ({ keyName, value, as, ...rest }) => {
  const Component = as || Text;
  return (
    <View animation="bounceIn" duration={400} style={style.container}>
      <Text style={style.keyName}>{toUpper(keyName)}</Text>
      <Component style={style.value} {...rest}>{value}</Component>
    </View>
  );
};

KeyValue.propTypes = {
  keyName: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  as: PropTypes.oneOfType([PropTypes.elementType, PropTypes.string])
};

export default KeyValue;
