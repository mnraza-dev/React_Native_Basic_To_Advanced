import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const UseMemoHook = () => {
    return (
        <View>
            <Text
                style={{
                    fontSize: 20,
                    textAlign: 'center',
                    margin: 10,
                    color: 'white'
                }}>
                Expensive Calculations
            </Text>
            <TouchableOpacity
                style={{
                    backgroundColor: 'blue',
                    padding: 10,
                    margin: 10,
                    justifyContent: 'center',
                    alignSelf: 'center',
                }}>
                <Text>Click Me</Text>
            </TouchableOpacity>
        </View>
    )
}

export default UseMemoHook

const styles = StyleSheet.create({})