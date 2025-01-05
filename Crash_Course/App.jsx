import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import LifeCycleComponents from './src/components/ClassComponents'
import FunctionalComponents from './src/components/FunctionalComponents'
import BasicComponents from './src/components/BasicComponents'
import { SafeAreaProvider } from 'react-native-safe-area-context'



const App = () => {
  return (
    <SafeAreaProvider>
    <View style={styles.container}>
      {/* <LifeCycleComponents /> */}
      {/* <FunctionalComponents /> */}
      <BasicComponents />
     
    </View>
    </SafeAreaProvider>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
})