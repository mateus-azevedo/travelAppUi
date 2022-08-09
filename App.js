import React from 'react';
import { Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Details from './components/Details';
import Home from './components/Home';
import Liked from './components/Liked';
import Profile from './components/Profile';

const App = () => {
  return (
    <View>
      <Text>App.js</Text>
    </View>
  );
};

export default App;
