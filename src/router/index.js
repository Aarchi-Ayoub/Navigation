import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
// Modules
import Containers from 'containers';
import Home from 'containers/Home';
import Auth from 'containers/Auth';
import Screen from 'containers/Screen';

export default () => {
  const Stack = createStackNavigator();
  const Drawer = createDrawerNavigator();
  const StackScreen = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          // options={{
          //   headerShown: false,
          // }}
          name="Containers"
          component={Containers}
        />
        <Stack.Screen
          name="Screen"
          component={Screen}
          // options={{
          //   headerShown: false,
          // }}
        />
      </Stack.Navigator>
    );
  };
  return (
    <NavigationContainer>
      <Drawer.Navigator useLegacyImplementation>
        <Drawer.Screen
          options={{
            headerShown: false,
          }}
          name="Containers"
          component={StackScreen}
        />
        <Drawer.Screen name="Home" component={Home} />

        <Drawer.Screen name="Auth" component={Auth} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
