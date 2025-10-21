import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Forms from './components/Forms'
import Lists from './components/Lists'
import EffectsExample from './components/EffectsExample'
import ListsWithMap from './components/ListsWithMap'
import DynamicGrid from './components/DynamicGrid'
import ClassComponents from './components/ClassComponents'

const App = () => {
  return (
    <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
      {/* <Forms/> */}
      {/* <Lists/> */}
      {/* <EffectsExample/> */}
      {/* <ListsWithMap/> */}
      {/* <DynamicGrid/> */}
      {/* <ClassComponents /> */}

     
      <ActivityIndicator size={100} color={'green'} />
  
    </View>
  )
}

export default App

const styles = StyleSheet.create({})