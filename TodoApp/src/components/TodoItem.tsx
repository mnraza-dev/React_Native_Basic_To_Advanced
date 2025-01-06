import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Todo } from '../types'

interface TodoItemProps {
    todoItem: Todo

}
const width = Dimensions.get('window').width;
const TodoItem: React.FC<TodoItemProps> = ({ todoItem }) => {
    return (
        <View
            style={[{ backgroundColor: todoItem.completed ? 'green' : 'lightblue' }, styles.containerTodoItem]}>
            <Text
                style={styles.textTodoItem}>
                {todoItem.text}

            </Text>

        </View>
    )
}

export default TodoItem

const styles = StyleSheet.create({
    containerTodoItem: {
        gap: 10,
        marginVertical: 10,
        borderRadius: 10,
        width: width * 0.9,

    },
    textTodoItem: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        padding: 16,
    }
})