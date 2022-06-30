import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';

export default ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Auth</Text>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Containers', {
            screen: 'Screen',
          })
        }>
        <Text style={styles.link}>Go to screen </Text>
      </TouchableOpacity>
    </View>
  );
};
