import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';

export default props => {
  console.log(props);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <Text style={styles.back}>Back</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Screen</Text>
      </View>
      <Text>Screen comp</Text>
    </View>
  );
};
