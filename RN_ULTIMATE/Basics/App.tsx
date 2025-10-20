import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

const App = () => {
  const [name, setName] = useState('Your Name')

  const greet = (newName) => {
    setName(newName)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{name}</Text>
      <TextInput
        onChangeText={(text) => setName(text)}
        value={name}
        placeholder="Enter Your Name"
        style={styles.textInput}
      />

      <Button color={'green'} title="Update Name" onPress={() => greet('MN Raza')} />
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  heading: {
    textAlign: 'center',
    fontSize: 44,
    marginBottom: 20,
  },
  textInput: {
    fontSize: 24,
    padding: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    marginBottom: 20,
  },
})
