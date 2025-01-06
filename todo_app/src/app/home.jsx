import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { useSelector } from 'react-redux';
import Header from "./../components/Header"
import AddButton from '../components/AddButton';
import { screenWidth, screenHeight } from "../utils/contants";
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Ionicons from '@expo/vector-icons/Ionicons';

const Home = () => {
  const data = useSelector(state => state.todo.data);
  console.log(data);
  const renderTodoItem = ({ item, onEdit, onDelete }) => (
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
          onPress={() => onDelete(item)}

            name="trash"
            size={32}
            color="#791E94" />

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
    backgroundColor: '#defaea',
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