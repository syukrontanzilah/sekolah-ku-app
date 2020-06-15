import React from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import { colors } from '../../../utils'

const Input = ({ label, placeholder }) => {
    return (
        <View>
            <Text style={styles.label}>{label}</Text>
            <TextInput style={styles.input}
            placeholder = {placeholder}
            placeholderTextColor = 'lightgray'/>
        </View>
    )
}

export default Input

const styles = StyleSheet.create({
    conteiner: {

    },
    input: {
        borderWidth: 1,
        borderColor: colors.border,
        borderRadius: 10,
        padding: 12,
        fontFamily: 'Lato-Regular',
        fontSize: 16,
        color: colors.primary,
       

    },
    label: {
        fontSize: 16,
        color: colors.text.secondary,
        fontFamily: 'Lato-Regular',
        marginBottom: 6

    }
})
