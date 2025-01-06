import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import UselayoutEffect from './UselayoutEffect'
import UseMemoHook from './UseMemoHook'

const Hooks = () => {

    // 
    return (
        <View style={styles.container}>
            {/* <UselayoutEffect /> */}
            <UseMemoHook />
        </View>
    )
}

export default Hooks

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        // backgroundColor: 'red',
    },
})