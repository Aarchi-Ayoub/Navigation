import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Containers from 'containers';
import Home from 'containers/Home';
import Auth from 'containers/Auth';
import Screen from 'containers/Screen';

export default () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Containers">
        <Stack.Screen name="Containers" component={Containers} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen
          name="Auth"
          component={Auth}
          options={{
            title: 'Authentification',
            headerBackTitleVisible: false,
          }}
        />
        <Stack.Screen
          name="Screen"
          component={Screen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
