import React, { useState, useEffect } from 'react';
import { Button, Text, View, TouchableOpacity, ActivityIndicator } from 'react-native';
import RouteList from './RouteList';
import { fetchRoutes } from '../actions';
import {
  SCREEN_BACKGROUND_COLOR,
  SCREEN_BACKGROUND_COLOR_DARK,
  ROUTE_BUTTON_COLOR
} from '../style';

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
  },
  loading: {
    flex: 1,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  }
};

const Home = (props) => {
  const [routes, setRoutes] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetchRoutes().then(routes => {
      setLoading(false);
      setRoutes(routes);
    });
  }, []);

  return (
    <View style={style.container}>
      <TouchableOpacity style={style.button} onPress={() => props.navigation.navigate('SetRoute')}>
        <Text style={style.buttonText}>Set Route</Text>
      </TouchableOpacity>
      {loading
        ? <ActivityIndicator style={style.loading} size={80} color={SCREEN_BACKGROUND_COLOR_DARK} />
        : <RouteList routes={routes} />
      }
    </View>
  );
};

export default Home;
