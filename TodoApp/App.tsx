import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import TodoInput from './src/components/TodoInput'
import TodoList from './src/components/TodoList'
import { Todo } from './src/types'

const App = (): React.JSX.Element => {

  const [todoList, setTodoList] = useState<Todo[]>([]);

  const addTodo = (text: string) => {
    console.log(text);

    setTodoList([...todoList,
    {
      id: Date.now().toString(),
      text,
      completed: false
    }])

    console.log(todoList);
  }

  const deleteTodo = (id: string) => {
    setTodoList(todoList.filter((todo) => todo.id !== id))
  }
  
  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>Todo App</Text>

      <TodoInput onAddTodo={addTodo} />
      <TodoList todoList={todoList} onDeleteTodo={deleteTodo} />
    </View>
  )
}

export default App
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#000',
  },
  pageTitle: {
    paddingVertical: 20,
    fontSize: 28,
    fontWeight: 'semibold',
    color: '#fff',

  }
})