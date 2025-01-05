import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const BasicComponents = () => {
    const insets = useSafeAreaInsets();
    
    console.log(insets.top);
    console.log(insets.bottom);
    console.log(insets.left);
    console.log(insets.right);
    

  return (
    <View>
      <Text>BasicComponents</Text>
    </View>
  )
}

export default BasicComponents

const styles = StyleSheet.create({

})