import { Text, StyleSheet, View, TextInput, Button } from 'react-native'
import React, { Component } from 'react'

export default class ClassComponents extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.pageTitle}>Class Components in React Native</Text>

                <TextInput style={styles.textInputBox} placeholder='Enter Name' />
                <Button color={'green'} title='Submit' />
                {/* <Text style={styles.pageTitle}>{ }</Text> */}

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 16,


    },
    pageTitle: {
        fontSize: 36,
        textAlign: 'center'

    },
    textInputBox: {
        padding: 10,
        fontSize: 28,
        borderWidth: 1,
        borderColor: '#111',
        borderRadius: 8,
        marginBottom: 12,

    }
})