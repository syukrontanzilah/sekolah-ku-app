import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import { colors, fonts } from '../../../utils'

const Input = ({ label, placeholder, value, onChangeText, secureTextEntry }) => {
    const [border, setBorder] = useState(colors.border)
    const onFocusForm = () => {
        setBorder(colors.primary);
    }
    const onBlurForm = () => {
        setBorder(colors.border)
    }
    return (
        <View>
            <Text style={styles.label}>{label}</Text>
            <TextInput
                onFocus={onFocusForm}
                onBlur={onBlurForm}
                style={styles.input(border)}
                placeholder={placeholder}
                placeholderTextColor='lightgray'
                value ={value}
                onChangeText={onChangeText} 
                secureTextEntry={secureTextEntry}/>
        </View>
    )
}

export default Input

const styles = StyleSheet.create({
    conteiner: {

    },
    input: (border) => ({
        borderWidth: 1,
        borderColor: border,
        borderRadius: 10,
        padding: 12,
        fontFamily: fonts.primary[600],
        fontSize: 18,
        color: colors.primary,
    }),
    label: {
        fontSize: 16,
        color: colors.text.secondary,
        fontFamily: fonts.primary[600],
        marginBottom: 6

    }
})
