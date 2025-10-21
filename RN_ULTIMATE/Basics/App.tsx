import { ActivityIndicator, Platform, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Forms from './components/Forms'
import Lists from './components/Lists'
import EffectsExample from './components/EffectsExample'
import ListsWithMap from './components/ListsWithMap'
import DynamicGrid from './components/DynamicGrid'
import ClassComponents from './components/ClassComponents'
import PlatformExample from './components/PlatformExample'

const App = () => {
  return (

    <View>
      <StatusBar backgroundColor={'green'} hidden={false} barStyle={'dark-content'} />

      {/* <Forms/> */}
      {/* <Lists/> */}
      {/* <EffectsExample/> */}
      {/* <ListsWithMap/> */}
      {/* <DynamicGrid/> */}
      {/* <ClassComponents /> */}
      {/* <ActivityIndicator size={100} color={'green'} /> */}

    <PlatformExample/>

    </View>
  )
}

export default App

const styles = StyleSheet.create({
 
})