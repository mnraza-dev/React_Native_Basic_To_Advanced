import { StyleSheet, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native'
import React, { useState } from 'react'

const Forms = () => {
  const [data, setData] = useState({
    name: '',
    email: '',
    profession: ''
  })

  const handleSubmit = () => {
    if (!data.name || !data.email || !data.profession) {
      Alert.alert('Error', 'Please fill all fields')
      return
    }
    Alert.alert('Form Submitted', `Name: ${data.name}\nEmail: ${data.email}\nProfession: ${data.profession}`)
  }

  return (
    <View style={{ padding: 10 }}>
      <Text style={{ fontSize: 28, textAlign: 'center', padding: 20 }}>
        Handling Forms in React Native
      </Text>

      <TextInput
        style={styles.textInputBox}
        value={data.name}
        onChangeText={(txt) => setData({ ...data, name: txt })}
        placeholder='Name here'
      />

      <TextInput
        style={styles.textInputBox}
        value={data.email}
        onChangeText={(txt) => setData({ ...data, email: txt })}
        placeholder='Email here'
      />

      <TextInput
        style={styles.textInputBox}
        value={data.profession}
        onChangeText={(txt) => setData({ ...data, profession: txt })}
        placeholder='Profession here'
      />

      <TouchableOpacity style={styles.btn} onPress={handleSubmit}>
        <Text style={styles.btnText}>Submit</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Forms

const styles = StyleSheet.create({
  textInputBox: {
    padding: 16,
    borderColor: '#140202ff',
    borderRadius: 10,
    borderWidth: 1,
    marginTop: 10,
    fontSize: 20,
  },
  btn: {
    marginTop: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: 'green',
    borderRadius: 10,
  },
  btnText: {
    color: 'white',
    fontSize: 24,
    textAlign: 'center',
  },
})
