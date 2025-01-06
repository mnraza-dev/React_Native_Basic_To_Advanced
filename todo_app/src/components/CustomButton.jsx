import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const CustomButton = ({ title, onPress }) => {
    return (
        <TouchableOpacity
            onPress={() => { }}
            style={styles.saveBtn}>
            <Text
                style={styles.btnText}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}

export default CustomButton

const styles = StyleSheet.create({
    btnText: {
        textAlign: 'center',
        color: 'white'
    },
    saveBtn: {
        margin: 15,
        padding: 12,
        borderRadius: 12,
        backgroundColor: 'purple',
        justifyContent: 'center',
        paddingHorizontal: 32,
        alignSelf: 'center',
    },
})