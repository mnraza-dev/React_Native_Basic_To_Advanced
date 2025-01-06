import { Alert, Dimensions, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Header from '../components/Header'
import AddButton from '../components/AddButton'
import CustomButton from '../components/CustomButton'
import { useDispatch } from 'react-redux'
import { addTodo } from "../redux/reducers/todoSlice"
const AddTodo = () => {
    const w = Dimensions.get('window').width;

    const dispatch = useDispatch();
    const [value, setValue] = useState('');
    const [description, setDescription] = useState('');



    const submit = async () => {
        if (value.trim() == '' || description.trim() == '') {
            Alert.alert('Please fill all the fields')
        }
        dispatch(addTodo({
            title: value,
            desc: description
        }))


    }
    return (
        <View style={styles.container}>
            <Header title="Add New Todo" isBackButton={true} />
            <TextInput
                style={[{
                    marginTop: 18,
                }, styles.input]}
                placeholder='Enter a Todo Task'
                value={value}
                onChangeText={(text) => setValue(text)} />
            <TextInput
                numberOfLines={4}
                multiline
                style={[styles.input, styles.minHeight]}
                placeholder='Enter a Task description'
                value={description}
                onChangeText={(text) => setDescription(text)} />
            <CustomButton title="Add Todo" onPress={submit} />

        </View>
    )
}

export default AddTodo

const styles = StyleSheet.create({
    container: {

    },
    input: {
        marginHorizontal: 15,
        marginVertical: 8,
        borderRadius: 12,
        borderWidth: 1,
        padding: 16,
        fontSize: 16,
        borderColor: "#ccc",

    },



    minHeight: {
        minHeight: 120
    }
})