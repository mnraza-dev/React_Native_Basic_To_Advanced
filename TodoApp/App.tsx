import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const App = (): React.JSX.Element => {
  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>Todo App</Text>
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
  },
  pageTitle: {
      fontSize: 30
  }
})