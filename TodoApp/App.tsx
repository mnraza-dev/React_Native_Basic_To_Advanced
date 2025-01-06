import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import TodoInput from './src/components/TodoInput'
import TodoList from './src/components/TodoList'
interface Todo {
  id: string,
  text: string,
  completed: boolean

}
const App = (): React.JSX.Element => {

  const [todoList, setTodoList] = useState<Todo[]>([]);

  const addTodo = (text: string) => {
    console.log(text);

    setTodoList([...todoList,
    {
      id: Math.random().toString(),
      text,
      completed: false
    }])

    console.log(todoList);


  }
  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>Todo App</Text>

      <TodoInput onAddTodo={addTodo} />
      <TodoList />
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
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
  }
})