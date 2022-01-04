/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, StyleSheet} from 'react-native';

const Home = () => {
  return <Text style={styles.text}>Home</Text>;
};

const styles = StyleSheet.create({
  text: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Home;
