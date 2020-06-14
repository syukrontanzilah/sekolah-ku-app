import React from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'

const Input = ({ label }) => {
    return (
        <View>
            <Text style={styles.label}>{label}</Text>
            <TextInput style={styles.input} />
        </View>
    )
}

export default Input

const styles = StyleSheet.create({
    conteiner: {

    },
    input: {
        borderWidth: 1,
        borderColor: '#e9e9e9',
        borderRadius: 10,
        padding: 12,
        fontFamily: 'Lato-Regular',
        fontSize: 18

    },
    label: {
        fontSize: 16,
        color: '#7d8797',
        fontFamily: 'Lato-Regular',
        marginBottom: 6

    }
})
