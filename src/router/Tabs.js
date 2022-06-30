import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import Containers from 'containers';
import Home from 'containers/Home';
import Auth from 'containers/Auth';
import Screen from 'containers/Screen';
import {Image, StyleSheet} from 'react-native';

export default () => {
  const BottomStack = createBottomTabNavigator();
  const ContainersStack = createStackNavigator();

  const ContainersStackScreens = () => {
    return (
      <ContainersStack.Navigator>
        <ContainersStack.Screen name="Containers" component={Containers} />

        <ContainersStack.Screen
          name="Screen"
          component={Screen}
          options={{
            headerShown: false,
          }}
        />
      </ContainersStack.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <BottomStack.Navigator>
        <BottomStack.Screen
          name="Containers"
          component={ContainersStackScreens}
          options={{
            headerShown: false,
            tabBarIcon: () => (
              <Image
                source={require('../assets/green.png')}
                style={styles.icons}
              />
            ),
          }}
        />
        <BottomStack.Screen
          options={{
            tabBarIcon: () => (
              <Image
                source={require('../assets/gray.png')}
                style={styles.icons}
              />
            ),
          }}
          name="Home"
          component={Home}
        />
        <BottomStack.Screen
          options={{
            tabBarIcon: () => (
              <Image
                source={require('../assets/red.png')}
                style={styles.icons}
              />
            ),
          }}
          name="Auth"
          component={Auth}
        />
      </BottomStack.Navigator>
    </NavigationContainer>
  );
};
const styles = StyleSheet.create({
  icons: {
    height: 20,
    width: 20,
  },
});
