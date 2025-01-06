import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TodoItem from './TodoItem'

const TodoList: React.FC = () => {
  return (
    <View>
      <Text>Todo List</Text>

      <TodoItem />
    </View>
  )
}

export default TodoList

const styles = StyleSheet.create({})