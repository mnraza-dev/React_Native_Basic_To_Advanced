import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons'
import { navigate } from 'expo-router/build/global-state/routing'
import { router } from 'expo-router'

const AddButton = () => {
    return (
        <TouchableOpacity
            onPress={() => router.navigate('/addtodo')}
            style={styles.AddButton}>
            <Text>
                <MaterialCommunityIcons name="plus" size={32} color="#fff" />
            </Text>
        </TouchableOpacity>
    )
}

export default AddButton

const styles = StyleSheet.create({
    AddButton: {
        position: 'absolute',
        bottom: 25,
        right: 20,
        backgroundColor: '#2F004F',
        shadowRadius: 2,
        shadowOpacity: 0.7,
        shadowOffset: {
            width: 1,
            height: 1
        },
        shadowColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 10,
        padding: 10,
        borderRadius: 50



    }
})