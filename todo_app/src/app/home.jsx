import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { useDispatch, useSelector } from 'react-redux';
import Header from "./../components/Header"
import AddButton from '../components/AddButton';
import { screenWidth, screenHeight } from "../utils/contants";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import { deleteTodo } from '../redux/reducers/todoSlice';
const Home = () => {


  const dispatch = useDispatch();

   // Delete handler
   const onDeleteHandler = (id) => {
    console.log('Deleting todo with id:', id);  // Add this log
    dispatch(deleteTodo(id));
 
  };
  const data = useSelector(state => state.todo.data);
  console.log(data);

  const renderTodoItem = ({ item }) => (
    <View style={styles.item}>
      <View style={styles.itemContent}>
        <View style={styles.TextContainer}>
          <Text style={styles.itemText}>{item.title}</Text>

        </View>
        <View style={styles.iconsContainer}>
          <MaterialCommunityIcons
            onPress={() => onEdit(item)}
            name="pencil-circle"
            size={32}
            color="#791E94" />
          <Ionicons
            onPress={() =>
              onDeleteHandler(item.id)}

            name="trash"
            size={32}
            color="#FF0000" />

        </View>
      </View >
    </View>


  );

  return (
    <View style={styles.container}>
      <Header title="Todo App" isBackButton={false} />
      <FlatList
        data={data}
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
            color: '#333'
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
  },
  emptyImage: {
    height: screenWidth * 0.5,
    width: screenHeight * 0.17,
    objectFit: 'contain'
  },
  emptyContainer: {
    height: screenHeight * 0.8,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  item: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  itemContent: {

    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  TextContainer: {
    padding: 16,
    height: 80,
    width: '70%',
    flexDirection: 'row',
    alignItems: 'center',

  },
  itemText: {
    fontSize: 14,
    color: '#222',
    fontWeight: '600',
    flex: 1,
  },
  iconsContainer: {
    paddingVertical: 16,
    paddingHorizontal: 14,
    height: 80,
    backgroundColor: 'transparent',
    width: '25%',
    gap: 10,
    borderBottomRightRadius: 12,
    borderTopRightRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconButton: {
    marginLeft: 10,

  },
})