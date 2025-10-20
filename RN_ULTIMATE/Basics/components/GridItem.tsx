import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const GridItem = ({ item }) => {
  return (
    <View style={styles.gridItem}>
      <Text style={styles.text}>{item.name}</Text>
      <Text style={styles.email}>{item.email}</Text>
      <Text style={styles.profession}>{item.profession}</Text>
    </View>
  )
}

export default GridItem

const styles = StyleSheet.create({
  gridItem: {
    margin: 5,
    height: 140,
    width: 185,
    backgroundColor: "#000000ff",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    elevation: 8,
  },
  text: {
    color: "white",
    marginTop: 2,
    fontSize: 18,
  },
  email: {
    color: "yellow",
    fontSize: 14,
    marginTop: 12,
  },
  profession: {
    color: "#8fe660e8",
    fontSize: 18,
    marginTop: 12,
  },
});
