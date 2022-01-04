/* eslint-disable prettier/prettier */
import React from 'react';
import {View, StyleSheet} from 'react-native';
import LottieView from 'lottie-react-native';

const Splash = ({navigation}) => {
  return (
    <View style={styles.container}>
      <LottieView
        source={require('../../assets/splash_animation.json')}
        autoPlay
        loop={false}
        speed={0.5}
        onAnimationFinish={() => {
          navigation.replace('Home');
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});

export default Splash;
