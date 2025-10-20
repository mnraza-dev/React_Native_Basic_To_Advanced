import { View, Text } from 'react-native'
import React from 'react'

const App = () => {
  const name ="MN Raza"
  return (
    <View style={{ backgroundColor: 'green' }}>
      <Text style={{ fontSize: 44,padding:20, textAlign: 'center', color: '#fff' }}>Hello, {name}</Text>
    </View>
  )
}

export default App