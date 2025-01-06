import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TodoInput from './src/components/TodoInput'

const App = (): React.JSX.Element => {
  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>Todo App</Text>

      <TodoInput />
    </View>
  )
}

export default App
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#000',
  },
  pageTitle: {
    paddingVertical: 20,
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
  }
})