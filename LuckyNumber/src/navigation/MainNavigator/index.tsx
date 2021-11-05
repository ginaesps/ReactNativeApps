import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import SplashScreen from '../../screens/SplashScreen';
import HomeScreen from '../../screens/LoginScreen';
import ResultScreen from '../../screens/ResultScreen';

const Stack = createStackNavigator();

function Component() {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Result"
        component={ResultScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default Component;
