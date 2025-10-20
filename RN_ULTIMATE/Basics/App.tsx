import { View, Text, Button, Alert } from 'react-native'
import React from 'react'
import UserData from './components/UserData'

const App = () => {
  const name ="MN Raza"
  return (
    <View style={{ backgroundColor: 'green' }}>
      <UserData/>
      <Button title='Tap here' onPress={()=>Alert.alert("Hi There")}/>
    </View>
  )
}

export default App