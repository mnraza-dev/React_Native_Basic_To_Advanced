import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TodoItem from './TodoItem'
import { Todo } from '../types'
interface TodoListProps {
  todoList: Todo[],
  onDeleteTodo: (id: string) => void
}


const TodoList: React.FC<TodoListProps> = ({ todoList, onDeleteTodo }) => {
  return (
    <ScrollView style={styles.scrollViewStyle}>

      {
        todoList.map((todo) => (
          <TodoItem onDelete={()=> onDeleteTodo(todo.id)} todoItem={todo} key={todo.id} />
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