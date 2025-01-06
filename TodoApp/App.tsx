import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const App = (): React.JSX.Element => {
  return (
    <View style={styles.container}>
      <Text>App</Text>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'lightblue',
  }
})