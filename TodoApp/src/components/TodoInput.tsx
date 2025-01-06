import { Dimensions, StyleSheet, TextInput, View } from 'react-native'
import React, { useState } from 'react'

const TodoInput = (): React.JSX.Element => {
    const { width } = Dimensions.get('window');
    const [inputValue, setInputValue] = useState('');


    const styles = StyleSheet.create({
        container: {
            flex: 1,
        },
        textInput: {
            marginTop: 20,
            width: width * 0.8,
            borderRadius: 10,
            borderWidth: 1,
            borderColor: 'white',
            paddingVertical: 20,
            paddingHorizontal: 10,
            backgroundColor: '#000',
        }
    });

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.textInput}
                value={inputValue}
                onChangeText={setInputValue}
                placeholder='Enter a Todo Name'
            />
        </View>
    )
}
export default TodoInput