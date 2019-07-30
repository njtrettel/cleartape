import React, { useState, useEffect } from 'react';
import { Button, Text, View, TouchableOpacity } from 'react-native';
import RouteList from './RouteList';
import { fetchRoutes } from '../actions';
import { SCREEN_BACKGROUND_COLOR, ROUTE_BUTTON_COLOR } from '../style';

const style = {
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: SCREEN_BACKGROUND_COLOR
  },
  button: {
    height: 40,
    paddingLeft: 16,
    paddingRight: 16,
    marginBottom: 16,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 5,
    backgroundColor: ROUTE_BUTTON_COLOR
  },
  buttonText: {
    color: 'white'
  }
};

const Home = (props) => {
  const [routes, setRoutes] = useState([]);
  useEffect(() => {
    fetchRoutes().then(routes => setRoutes(routes));
  }, []);

  return (
    <View style={style.container}>
      <TouchableOpacity style={style.button} onPress={() => props.navigation.navigate('SetRoute')}>
        <Text style={style.buttonText}>Set Route</Text>
      </TouchableOpacity>
      <RouteList routes={routes} />
    </View>
  );
};

export default Home;
