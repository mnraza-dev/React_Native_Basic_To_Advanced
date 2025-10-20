import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

const TextInputExample = () => {
  const [text, setText] = useState('');
  const [name, setName] = useState('');

  const greet = (newName) => {
    setName(newName)
     Alert.alert('✅ Success', `Name updated to "${newName}"`)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{name}</Text>
      <TextInput
        onChangeText={(txt) => setText(txt)}
        value={text}
        placeholder="Enter Your Name"
        style={styles.textInput}
      />

      <Button color={'green'} title="Update Name" onPress={() => greet(text)} />
    </View>
  )
}

export default TextInputExample

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
    borderRadius: 12,
    marginBottom: 20,
  },
})
