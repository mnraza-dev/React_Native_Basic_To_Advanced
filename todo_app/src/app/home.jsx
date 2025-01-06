import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { useSelector } from 'react-redux';
import Header from "./../components/Header"
import AddButton from '../components/AddButton';
const Home = () => {
  const data = useSelector(state => state.todo.data);
  console.log(data);
  const renderTodoItem = ({ item }) => (
    <Link href={`/todo/${item.id}`} asChild>
      <View style={styles.item}>
        <Text>{item.title}</Text>
      </View>
    </Link>
  )

  return (
    <View style={styles.container}>
      <Header title="Todo App" isBackButton={false} />
      <Text>Home 2 screen </Text>

      <FlatList
        data={data}
        initialNumToRender={10}
        key={item => item.id}
        keyExtractor={item => item.id}
        renderItem={renderTodoItem}
        windowSize={10}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={<View><Text>Click on plus button to add yours todo tasks!</Text></View>}
      />
      <AddButton />

    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // position: 'relative',

  }
})