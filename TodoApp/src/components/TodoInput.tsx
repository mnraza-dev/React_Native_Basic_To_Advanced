import { Dimensions, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
interface TodoInputProps {
    onAddTodo: (text: string) => void
}
const { width } = Dimensions.get('window');

const TodoInput: React.FC<TodoInputProps> = ({ onAddTodo }) => {

    const [text, setText] = useState('');
    const handleAddTodo = () => {
        if (text.trim()) {
            onAddTodo(text.trim());
            setText('');
        }
    }

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.textInput}
                value={text}
                onChangeText={setText}
                placeholder='Enter a Todo Name'
            />
            <TouchableOpacity style={styles.addBtn} onPress={handleAddTodo}>
                <Text style={[styles.btnText, {
                    color: 'red',
                }]}>Add Todo</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
        marginBottom: 20,

    },
    textInput: {
        width: '70%',
        fontSize: 16,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'white',
        paddingVertical: 20,
        paddingHorizontal: 10,
        backgroundColor: '',

    },
    addBtn: {
        width: '20%',
        borderWidth: 2,
        borderColor: 'green',
        borderRadius: 10,
        paddingHorizontal: 10,
        marginLeft: 10,
        alignItems: 'center',
        justifyContent: 'center',
        color: 'green',
    },
    btnText: {
        fontSize: 14,
        color: 'green',
        fontWeight: 'bold',
    }
});

export default TodoInput