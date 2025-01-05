import { Alert, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'

const FunctionalComponents = () => {
    const [count, setCount] = useState(0)
    useEffect(() => {
        console.log('Component Mounted')
        return () => {
            console.log('Component Unmounted')
        }
    }, [])


    useEffect(() => {
        console.log('Count Updated');
        
        if(count === 5){
            Alert.alert('Count reached 5')
        }
    },[count])
    
    return (
 
        <View>
            <Text style={{
                fontSize: 20,
                color: 'white',
                fontWeight: 'bold',
                textAlign: 'center',
                margin: 20
            }}>Count : {count}</Text>
            <TouchableOpacity style={styles.btnStyle} onPress={() => setCount(count + 1)}>
                <Text>Increase</Text>
            </TouchableOpacity>
        </View>
    
    )
}

export default FunctionalComponents

const styles = StyleSheet.create({
    btnStyle:{
        backgroundColor: 'lightblue',	
        padding:12,
        borderRadius:8,
    }
})