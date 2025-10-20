import { FlatList, StyleSheet, Text, ScrollView, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';

const ListsWithMap = () => {
    const users = [
        { id: 1, name: "MN Raza", email: "mnraza@example.com", profession: "Software Engineer" },
        { id: 2, name: "Ayesha Khan", email: "ayesha@example.com", profession: "UI Designer" },
        { id: 3, name: "Rahul Sharma", email: "rahul@example.com", profession: "Data Analyst" },
        { id: 4, name: "Fatima Ali", email: "fatima@example.com", profession: "Backend Developer" },
        { id: 5, name: "John Doe", email: "john@example.com", profession: "Project Manager" },
        { id: 6, name: "Priya Singh", email: "priya@example.com", profession: "QA Engineer" },
        { id: 7, name: "Omar Farooq", email: "omar@example.com", profession: "Mobile Developer" },
        { id: 8, name: "Sara Patel", email: "sara@example.com", profession: "UI/UX Designer" },
        { id: 9, name: "David Johnson", email: "david@example.com", profession: "DevOps Engineer" },
        { id: 10, name: "Anjali Mehta", email: "anjali@example.com", profession: "Frontend Developer" },
    ];

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.heading}>Lists with Map() function in React Native</Text>

            <ScrollView style={{
                marginBottom: 200,
            }}>
                {
                    users.map((item) => <View key={item.id} style={styles.card}>
                        <Text style={styles.name}>{item.name}</Text>
                        <Text style={styles.email}>{item.email}</Text>
                        <Text style={styles.profession}>{item.profession}</Text>
                    </View>)
                }
            </ScrollView>
        </SafeAreaView>
    );
}

export default ListsWithMap;

const styles = StyleSheet.create({
    container: {
        padding: 10,


    },
    heading: {
        padding: 10,
        textAlign: 'center',
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    card: {
        backgroundColor: '#f2f2f2',
        padding: 15,
        borderRadius: 10,
        marginVertical: 8,
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    email: {
        fontSize: 16,
        color: '#555',
    },
    profession: {
        fontSize: 16,
        color: '#777',
    },
});
