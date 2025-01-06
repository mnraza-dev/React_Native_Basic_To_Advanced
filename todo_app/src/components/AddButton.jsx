import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'

const AddButton = () => {
    return (
        <View>
            <TouchableOpacity
                onPress={() => {
                    Alert.alert('went back')
                }}
                style={styles.AddButton}>
                <Text>
                    <AntDesign
                        name="pluscircle"
                        size={32} color="white" />
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default AddButton

const styles = StyleSheet.create({
    AddButton: {
        position: 'absolute',
        bottom: 10,
        right: 10,
        backgroundColor: 'purple',
        shadowRadius: 2,
        shadowOpacity: 0.7,
        shadowOffset: {
            width: 1,
            height: 1
        },
        shadowColor: '#000',
        alignItems: 'center',
        justifyContent:'center',
        

    }
})