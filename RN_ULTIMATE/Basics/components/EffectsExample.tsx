import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';

const EffectsExample = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.warn('useEffect called — count changed:', count);
    }, [count]);


    return (
        <View style={styles.container}>
            <Text style={styles.heading}>useEffects in React Native</Text>

            <Text style={{ fontSize: 36, textAlign: 'center', marginBottom: 10, marginTop: 40, }}>Count: {count}</Text>
            <TouchableOpacity style={styles.btn} onPress={() => {
                setCount(count + 1)

            }}>
                <Text style={styles.btnText}>➕ Tap to Increase</Text>
            </TouchableOpacity>


        </View>
    );
};

export default EffectsExample;

const styles = StyleSheet.create({
    container: { padding: 10, },
    heading: {
        fontSize: 32,
        textAlign: 'center',
    },
    btn: {
        marginTop: 20,
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: 'purple',
        borderRadius: 10,
    },
    btnText: {
        color: 'white',
        fontSize: 24,
        textAlign: 'center',
    },
})
