import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { useSelector } from 'react-redux';
import Header from "./../components/Header"
import AddButton from '../components/AddButton';
const Home = () => {
  const data = useSelector(state => state.todo.data);
  console.log(data);

  return (
    <View style={styles.container}>
      <Header title="Todo App" isBackButton={true} />
      <Text>Home 2 screen </Text>

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