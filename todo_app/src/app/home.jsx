import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { useSelector } from 'react-redux';
import Header from "./../components/Header"
const Home = () => {
  const data = useSelector(state => state.todo.data);
  console.log(data);

  return (
    <View>
      <Header title="Todo App" isBackButton={true}/>
      <Text>Home 2 screen </Text>
     
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})