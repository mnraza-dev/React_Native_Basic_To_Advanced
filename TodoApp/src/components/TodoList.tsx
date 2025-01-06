import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TodoItem from './TodoItem'
import { Todo } from '../types'
interface TodoListProps {
  todoList: Todo[]
}
const TodoList: React.FC<TodoListProps> = ({ todoList }) => {
  return (
    <ScrollView style={styles.scrollViewStyle}>

      {
        todoList.map((todo) => (
          <TodoItem todoItem={todo} key={todo.id} />
        ))
      }

    </ScrollView>
  )
}

export default TodoList

const styles = StyleSheet.create({
  scrollViewStyle: {

  }
})