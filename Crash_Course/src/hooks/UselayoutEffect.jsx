import { StyleSheet, Text, View } from 'react-native'
import React, { useLayoutEffect, useRef, useState } from 'react'

const UselayoutEffect = () => {
  const [dimension, setDimension] = useState({});
  const viewRef = useRef();

  useLayoutEffect(() => {
    console.log('useLayoutEffect');
    
    if (viewRef.current) {
      viewRef.current.measure((x, y, width, height, pageX, pageY) => {
        setDimension({ x, y, width, height, pageX, pageY })
      })
    }
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.box} ref={viewRef} />
      <Text>Box Dimension: </Text>
      <Text>{JSON.stringify(dimension, null, 1)}</Text>
    </View>
  )
}

export default UselayoutEffect

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: 'red',
  },
  box: {
    justifyContent: 'center',
    // alignSelf: 'center',
    // flex: 1,
    width: 100,
    height: 100,
    color: 'white',
    backgroundColor: 'blue'
  }
})