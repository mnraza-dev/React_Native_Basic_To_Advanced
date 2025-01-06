import { View, Text } from 'react-native'
import React from 'react'
import { useFonts } from 'expo-font'

const Main = () => {

    const {loaded} = useFonts(
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

export default Main