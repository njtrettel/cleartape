import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";
import Home from './Home';
import AddRoute from './AddRoute';

const AppNavigator = createStackNavigator({
  Home: Home,
  AddRoute: AddRoute
}, {
  initialRouteName: 'Home'
});

const AppContainer = createAppContainer(AppNavigator);

const App = () => {
  return (
    <AppContainer />
  );
};

export default App;
