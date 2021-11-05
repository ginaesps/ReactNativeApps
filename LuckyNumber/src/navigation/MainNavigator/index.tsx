import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import SplashScreen from '../../screens/SplashScreen';
import Home from '../../screens/HomeScreen/home';
import Results from '../../screens/results';

const Stack = createStackNavigator();

function Component() {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Result"
        component={Results}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default Component;
