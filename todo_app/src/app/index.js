import { View, Text, StyleSheet, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useFonts } from 'expo-font';
import Logo from '../assets/images/adaptive-icon.png';
import { screenHeight, screenWidth } from '../utils/contants';
import { resetAndNavigate } from '../utils/helpers.js';
import { ActivityIndicator } from 'react-native-web';

const Main = () => {
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf')
  });

  const [hasNavigated, setHasNavigated] = useState(false);

  useEffect(() => {
    if (loaded && !hasNavigated) {
      const timeout = setTimeout(() => {
        console.log('Navigating after timeout');
        resetAndNavigate('/home');
        setHasNavigated(true); // Update state after navigating
      }, 1000);

      return () => clearTimeout(timeout); // Cleanup on component unmount
    }
  }, [loaded, hasNavigated]);

  if (!loaded) {
    // You can add a loading spinner or a fallback UI here until fonts load
    return <ActivityIndicator />;
  }

  return (
    <View style={styles.container}>
      <View>
        <Image style={styles.LogoImage} source={Logo} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'SpaceMono', // Ensure font is applied once loaded
  },
  LogoImage: {
    height: screenHeight * 0.3,
    width: screenWidth * 0.4,
  },
});

export default Main;
