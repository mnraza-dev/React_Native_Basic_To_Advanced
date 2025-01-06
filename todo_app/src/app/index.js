import { View, Text, StyleSheet, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useFonts } from 'expo-font'
import Logo from '../assets/images/icon.png';
import { screenHeight, screenWidth } from '../utils/contants'
const Main = () => {
  const [loaded] = useFonts(
    {
      SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf')
    }
  );

  const [hasNavigated, setHasNavigated] = useState(false);

  useEffect(() => {
    if (loaded && !hasNavigated) {
    const timeout =  setTimeout(() => {
       naviga
     }, 1000);
    }
  }, [hasNavigated])




  return (
    <View>
      <Image style={styles.LogoImage} source={require(Logo)} />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'SpaceMono'

  },
  LogoImage: {
    width: screenWidth * 0.3,
    height: screenHeight * 0.15,
  }
})

export default Main