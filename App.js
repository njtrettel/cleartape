import React, { useState, useEffect } from 'react';
import { Text, View, YellowBox } from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";
import Home from './Home';
import SetRoute from './SetRoute';
import PickHolds from './PickHolds';

const AppNavigator = createStackNavigator({
  Home: Home,
  SetRoute: SetRoute,
  PickHolds: PickHolds
}, {
  initialRouteName: 'Home'
});

const AppContainer = createAppContainer(AppNavigator);

const App = () => {
  YellowBox.ignoreWarnings([
    'Warning: componentWillMount is deprecated',
    'Warning: componentWillUpdate is deprecated',
    'Warning: componentWillReceiveProps is deprecated'
  ]);
  return (
    <AppContainer />
  );
};

export default App;
