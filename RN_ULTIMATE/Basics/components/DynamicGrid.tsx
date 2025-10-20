import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import GridItem from "./GridItem";

const users = [
    { id: 1, name: "Md Noorullah Raza", email: "mnraza.dev@gmail.com", profession: "Software Engineer" },
    { id: 2, name: "Ayesha Khan", email: "ayesha@example.com", profession: "UI Designer" },
    { id: 3, name: "Rahul Sharma", email: "rahul@example.com", profession: "Data Analyst" },
    { id: 4, name: "Fatima Ali", email: "fatima@example.com", profession: "Backend Developer" },
    { id: 5, name: "John Doe", email: "john@example.com", profession: "Project Manager" },
    { id: 6, name: "Priya Singh", email: "priya@example.com", profession: "QA Engineer" },
    { id: 7, name: "Omar Farooq", email: "omar@example.com", profession: "Mobile Developer" },
    { id: 8, name: "Sara Patel", email: "sara@example.com", profession: "UI/UX Designer" },
    { id: 9, name: "David Johnson", email: "david@example.com", profession: "DevOps Engineer" },
    { id: 10, name: "Anjali Mehta", email: "anjali@example.com", profession: "Frontend Developer" },
    { id: 11, name: "Rohan Gupta", email: "rohan@example.com", profession: "Software Engineer" },
    { id: 12, name: "Neha Verma", email: "neha@example.com", profession: "UI Designer" },
    { id: 13, name: "Karan Singh", email: "karan@example.com", profession: "Data Analyst" },
    { id: 14, name: "Ishita Sharma", email: "ishita@example.com", profession: "Backend Developer" },
    { id: 15, name: "Amit Roy", email: "amit@example.com", profession: "Project Manager" },
    { id: 16, name: "Simran Kaur", email: "simran@example.com", profession: "QA Engineer" },
    { id: 17, name: "Aditya Mehra", email: "aditya@example.com", profession: "Mobile Developer" },
    { id: 18, name: "Pooja Nair", email: "pooja@example.com", profession: "UI/UX Designer" },
    { id: 19, name: "Vikram Desai", email: "vikram@example.com", profession: "DevOps Engineer" },
    { id: 20, name: "Riya Kapoor", email: "riya@example.com", profession: "Frontend Developer" },
    { id: 21, name: "Siddharth Jain", email: "siddharth@example.com", profession: "Software Engineer" },
    { id: 22, name: "Meera Sen", email: "meera@example.com", profession: "UI Designer" },
    { id: 23, name: "Ankit Malhotra", email: "ankit@example.com", profession: "Data Analyst" },
    { id: 24, name: "Tanya Roy", email: "tanya@example.com", profession: "Backend Developer" },
    { id: 25, name: "Raghav Bansal", email: "raghav@example.com", profession: "Project Manager" },
    { id: 26, name: "Nisha Shah", email: "nisha@example.com", profession: "QA Engineer" },
    { id: 27, name: "Kabir Ahmed", email: "kabir@example.com", profession: "Mobile Developer" },
    { id: 28, name: "Ananya Reddy", email: "ananya@example.com", profession: "UI/UX Designer" },
    { id: 29, name: "Harsh Vora", email: "harsh@example.com", profession: "DevOps Engineer" },
    { id: 30, name: "Sanya Chawla", email: "sanya@example.com", profession: "Frontend Developer" },
];

const DynamicGrid = () => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            {users.map((item) => (
                <GridItem item={item} />
            ))}
        </ScrollView>
    );
};

export default DynamicGrid;

const styles = StyleSheet.create({
    container: {
        padding: 6,
        // flex: 1, 
        // When using a ScrollView with flexWrap: 'wrap', the parent should not have flex: 1 inside the contentContainerStyle. Otherwise, React Native tries to stretch the container to fill the screen and can cause layout issues.
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center'

    },
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
