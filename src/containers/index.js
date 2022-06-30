import {View, Text, TouchableOpacity, Alert, StyleSheet} from 'react-native';
import React from 'react';

export default ({navigation}) => {
  console.log(navigation);
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.push('Auth')}>
        <Text style={styles.link}>Auth</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Text style={styles.link}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Screen')}>
        <Text style={styles.link}>Screen</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  link: {
    color: 'blue',
    fontSize: 20,
    textDecorationLine: 'underline',
    marginVertical: 10,
  },
});
