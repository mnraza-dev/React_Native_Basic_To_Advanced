import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { useFonts } from 'expo-font'
import Logo from '../assets/images/icon.png';
const Main = () => {

  const { loaded } = useFonts(
    {
      SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf')
    }
  );

  return (
    <View>
     <Image source={require(Logo)} />
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

  }
})

export default Main