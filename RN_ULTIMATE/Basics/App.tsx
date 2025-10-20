import { View, Button, Alert } from 'react-native'
import React from 'react'
import UserData from './components/UserData'

const App = () => {

  const fruit =(fruit)=>{
    console.log('function called',fruit);
    
  }
  const name ="MN Raza"
  return (
    <View style={{ backgroundColor: 'green' }}>
      <UserData/>
      <Button  title='Tap here' 
      // onPress={()=>Alert.alert("Hi There")}
      onPress={()=>fruit('mango')}
      />
    </View>
  )
}

export default App