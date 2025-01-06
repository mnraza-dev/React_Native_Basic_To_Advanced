import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const TodoItem = ({ item }) => (
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
            color="#FF0000" />

        </View>
      </View >
    </View>


  );


export default Todoltem

const styles = StyleSheet.create({})