import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons'

const AddButton = () => {
    return (

        <TouchableOpacity
            onPress={() => {
                Alert.alert('add todo task ')
            }}
            style={styles.AddButton}>
            <Text>
                <MaterialCommunityIcons name="plus" size={24} color="#fff" />
            </Text>
        </TouchableOpacity>

    )
}

export default AddButton

const styles = StyleSheet.create({
    AddButton: {
        position: 'absolute',
        bottom: 16,
        right: 16,
        backgroundColor: 'purple',
        shadowRadius: 2,
        shadowOpacity: 0.7,
        shadowOffset: {
            width: 1,
            height: 1
        },
        shadowColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 10,
        padding: 10,
        borderRadius: 50



    }
})