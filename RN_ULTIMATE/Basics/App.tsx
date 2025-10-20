import { View, Text } from 'react-native'
import React from 'react'
import UserData from './components/UserData'

const App = () => {
  const name ="MN Raza"
  return (
    <View style={{ backgroundColor: 'green' }}>
      <UserData/>
    </View>
  )
}

export default App