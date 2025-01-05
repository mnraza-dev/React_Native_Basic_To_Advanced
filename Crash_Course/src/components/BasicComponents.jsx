import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const BasicComponents = () => {

    const onLayout = (e) => {
        console.log(e.nativeEvent.layout);

    }

    return (
        <View onLayout={onLayout} style={{
            flex: 1,
            justifyContent: 'start',
            alignItems: 'center',
        }}>
            <Text style={{
                fontSize: 24,
                color: '#fff',
                marginVertical: 30,
                backgroundColor: 'blue',
                padding: 10,
            }}>Basic Components</Text>
            <Image
                source={{ uri: 'https://reactnative.dev/docs/assets/p_cat2.png' }} style={{ width: 250, height: 200 }} />
        </View>
    )
}

export default BasicComponents

const styles = StyleSheet.create({

})