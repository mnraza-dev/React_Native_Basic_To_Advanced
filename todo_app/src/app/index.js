import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { useFonts } from 'expo-font'

const Main = () => {

  const { loaded } = useFonts(
    {
      SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf')
    }
  );

  return (
    <View>
      <Text>Index</Text>
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