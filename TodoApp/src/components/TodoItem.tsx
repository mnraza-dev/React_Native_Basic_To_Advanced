import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Todo } from '../types'

interface TodoItemProps {
    todoItem: Todo,
    onDelete: () => void

}
const width = Dimensions.get('window').width;
const TodoItem: React.FC<TodoItemProps> = ({ todoItem, onDelete }) => {
    return (
        <View
            style={[{ backgroundColor: todoItem.completed ? 'green' : '#333' }, styles.containerTodoItem]}>
            <TouchableOpacity style={styles.containerTodoItemButton}>
                <Text
                    style={styles.textTodoItem}>
                    {todoItem.text}

                </Text>
            </TouchableOpacity>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginVertical: 10,
                gap: 10,


            }}>
                <Text style={{
                    color: 'white',
                    fontSize: 16,
                    fontWeight: 'bold',
                    padding: 4,
                    paddingHorizontal: 10,
                    borderRadius: 14,
                    borderWidth: 1,
                    borderColor: 'lightblue',
                }}>Edit</Text>
                <TouchableOpacity
                    onPress={onDelete} style={styles.deleteBtn}>
                    <Text style={{
                        color: 'white',
                        fontSize: 16,
                        fontWeight: 'bold',

                    }}>Delete</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default TodoItem

const styles = StyleSheet.create({
    containerTodoItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 14,
        borderWidth: 1,
        borderColor: '#f0f0f0',
        width: width - 35,

    },
    containerTodoItemButton: {

    },
    textTodoItem: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        padding: 16,
    },
    deleteBtn: {
        padding: 4,
        paddingHorizontal: 10,
        borderRadius: 14,
        borderWidth: 1,
        borderColor: 'red',
    }
})