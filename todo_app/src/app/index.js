import { View, Text, StyleSheet, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useFonts } from 'expo-font'
import Logo from '../assets/images/adaptive-icon.png';
import { screenHeight, screenWidth } from '../utils/contants.js'
import { resetAndNavigate } from '../utils/helpers.js';

const Main = () => {
  const [loaded] = useFonts(
    {
      SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf')
    }
  );

  const [hasNavigated, setHasNavigated] = useState(false);

  useEffect(() => {
    if (loaded && !hasNavigated) {
      const timeout = setTimeout(() => {
        console.log('timeout');
        resetAndNavigate('/home');

      }, 1000);

      return () => {
        clearTimeout(timeout);
      }
    }
  }, [hasNavigated])




  return (
    <View style={styles.container}>

      <View>
        <Image style={styles.LogoImage} source={Logo} />
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'SpaceMono'

  },
  LogoImage: {
    height: screenHeight * 0.3,
    width: screenWidth * 0.4,
  }
})

export default Main