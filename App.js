import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CurrentWeather from './src/Screen/CurrentWeather';
import UpcommingWeather from './src/Screen/UpcommingWeather';
import City from './src/Screen/City';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="current" component={CurrentWeather} />
        <Tab.Screen name="upcomming" component={UpcommingWeather} />
        <Tab.Screen name="city" component={City} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
