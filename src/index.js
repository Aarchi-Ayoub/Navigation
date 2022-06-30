import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Router from './router';

export default () => {
  return (
    <View style={styles.container}>
      <Router />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
  },
});
