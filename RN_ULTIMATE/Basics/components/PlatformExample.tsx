import { StyleSheet, Text, View, Platform } from "react-native";
import React from "react";

const PlatformExample = () => {
    return (
        <View style={styles.container}>
          
            {/* <Text style={styles.text}>
                {Platform.OS === "android"
                    ? "Hello Android User 🤖"
                    : "Hello iOS User 🍎"}
            </Text> */}

            {
                Platform.OS == 'android' ?
                    <View style={{
                        backgroundColor: 'green',
                        height: 100,
                        width: 100,
                    }}></View> :
                    <View style={{
                        backgroundColor: 'red',
                        height: 100,
                        width: 100,
                    }}></View>
            }
        </View>
    );
};

export default PlatformExample;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        color: Platform.OS === "android" ? "green" : "red",
        fontSize: Platform.OS === "android" ? 28 : 20,
        fontWeight: "bold",
    },
});
