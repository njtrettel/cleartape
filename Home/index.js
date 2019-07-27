import React, { useState, useEffect } from 'react';
import { Button, Text, View } from 'react-native';
import RouteList from './RouteList';

import { fakeRoutes } from '../support/fakeRoutes';

const style = {
  flex: 1,
  padding: 16,
  backgroundColor: 'rgba(194, 233, 251, .25)'
};

const Home = (props) => {
  const [routes, setRoutes] = useState([]);
  useEffect(() => {
    Promise.resolve().then(setRoutes(fakeRoutes))
  }, []);

  return (
    <View style={style}>
      <Button onPress={() => props.navigation.navigate('SetRoute')} title='Set Route' />
      <RouteList routes={routes} />
    </View>
  );
};

export default Home;
