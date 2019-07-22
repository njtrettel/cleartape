import React, { useState, useEffect } from 'react';
import { Button, Text, View } from 'react-native';
import RouteList from './RouteList';

import { fakeRoutes } from '../support/fakeRoutes';

const style = { flex: 1, alignItems: "center", justifyContent: "center" };

const Home = (props) => {
  const [routes, setRoutes] = useState([]);
  useEffect(() => {
    Promise.resolve().then(setRoutes(fakeRoutes))
  }, []);

  return (
    <View style={style}>
      <Button onPress={() => props.navigation.navigate('AddRoute')} title="Add Route" />
      <RouteList routes={routes} />
    </View>
  );
};

export default Home;
