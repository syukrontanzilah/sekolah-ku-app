import React from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import { colors, fonts } from '../../../utils'

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
        fontFamily: fonts.primary[600],
        fontSize: 18,
        color: colors.primary,
       

    },
    label: {
        fontSize: 16,
        color: colors.text.secondary,
        fontFamily: fonts.primary[600],
        marginBottom: 6

    }
})
