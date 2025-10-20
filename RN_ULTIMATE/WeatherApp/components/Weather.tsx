import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
type Weather = {
    temp: string;
    desc: string;
    humidity: string;
    feelsLike: string;
};


const WeatherApp = () => {
    const [city, setCity] = useState("Bangalore");
    const [weather, setWeather] = useState<Weather | null>(null);

    const getWeather = async () => {
        try {
            const res = await fetch(`https://wttr.in/${city}?format=j1`);
            const data = await res.json();

            const current = data.current_condition[0];
            setWeather({
                temp: current.temp_C,
                desc: current.weatherDesc[0].value,
                humidity: current.humidity,
                feelsLike: current.FeelsLikeC,
            });
        } catch (error) {
            console.error("Error fetching weather:", error);
        }
    };

    useEffect(() => {
        getWeather();
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>🌤 Weather App</Text>

            <View style={styles.searchContainer}>
                <TextInput
                    placeholder="Enter city name..."
                    placeholderTextColor="#ccc"
                    value={city}
                    onChangeText={setCity}
                    style={styles.input}
                />

                <TouchableOpacity style={styles.button} onPress={getWeather}>
                    <Text style={styles.btnText}>Search</Text>
                </TouchableOpacity>
            </View>

            {weather ? (
                <View style={styles.resultBox}>
                    <Text style={styles.temp}>{weather?.temp}°C</Text>
                    <Text style={styles.desc}>{weather?.desc}</Text>
                    <Text style={styles.extra}>Humidity: {weather?.humidity}%</Text>
                    <Text style={styles.extra}>Feels like: {weather?.feelsLike}°C</Text>

                </View>
            ) : (
                <Text style={styles.loading}>Loading...</Text>
            )}
        </View>
    );
};

export default WeatherApp;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#04181bff",
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
    },
    title: {
        fontSize: 32,
        fontWeight: "bold",
        marginBottom: 60,
        color: 'white'
    },
    input: {
        borderWidth: 1,
        borderColor: "#aaa",
        borderRadius: 4,
        padding: 12,
        color: 'white',
        width: "70%",
        marginTop: 4,
        fontSize: 20,
    },
    button: {
        backgroundColor: "#3c0d3bff",
        paddingHorizontal: 30,
        paddingVertical: 15,
        borderRadius: 4,
        marginTop:3,
    },
    btnText: {
        color: "#fff",
        fontSize:20,
    },
    resultBox: {
        marginTop: 30,
        alignItems: "center",
        backgroundColor: "#fff",
        padding: 20,
        width:'75%',
        borderRadius: 10,
        elevation: 4,
    },
    cityName: {
        fontSize: 28,
        fontWeight: "bold",
    },
    temp: {
        fontSize: 56,
        fontWeight: "600",
        color: "#096738ff",
    },
    desc: {
        fontSize: 30,
        color: "#555",
        textAlign:'center',
        marginBottom: 10,
    },
    extra: {
        fontSize: 20,
        color: "#333",
    },
    loading: {
        fontSize: 20,
        marginTop: 20,
    },
    searchContainer: {
        flexDirection: 'row',       
        justifyContent: 'center',  
        alignItems: 'center',      
        marginBottom: 10,
    },


});
