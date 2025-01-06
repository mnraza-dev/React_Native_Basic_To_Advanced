import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { useSelector } from 'react-redux';
import Header from "./../components/Header"
import AddButton from '../components/AddButton';
import { screenWidth, screenHeight } from "../utils/contants";
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


      <FlatList
        data={[]}
        initialNumToRender={10}
        key={item => item.id}
        keyExtractor={item => item.id}
        renderItem={renderTodoItem}
        windowSize={10}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={<View style={styles.emptyContainer}>
          <Image
            source={require('./../assets/images/add.png')}
            style={styles.emptyImage} />
          <Text style={{
            textAlign: 'center',
            width: '100%',
            fontSize: 20,
            fontWeight: 'bold',
            color: '#f0f0f0'
          }}>

            Click on plus button to add yours todo tasks!
          </Text>
        </View>}
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

  },
  emptyImage: {
    height: screenWidth * 0.5,
    width: screenHeight * 0.2,
    objectFit: 'contain'
  },
  emptyContainer: {
    height: screenHeight * 0.8,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  }
})