import { Alert, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
// import { AntDesign } from '@expo/vector-icons'
import AntDesign from '@expo/vector-icons/AntDesign';
import { router } from 'expo-router';

const Header = ({ title, isBackButton }) => {
    return (
        <View style={styles.container}>
            <SafeAreaView />

            <View>
                <Text style={styles.TextTitle}>{title}</Text>
                {
                    isBackButton &&
                    <TouchableOpacity
                        onPress={() => router.back()}
                        style={styles.backBtn}>
                        <Text>
                            <AntDesign name="back" size={24} color="white" />
                        </Text>
                    </TouchableOpacity>
                }
            </View>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#2F004F',
        padding: 12,
    },
    TextTitle: {
        fontFamily: 'SpaceMono',
        color: 'white',
        fontSize: 18,
        textAlign: 'center',
        fontWeight: 800,

    },
    backBtn: {
        position: 'absolute',
        bottom: 0,
        color: 'white'
    }
})