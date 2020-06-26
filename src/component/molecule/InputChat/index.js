import React from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import { colors, fonts } from '../../../utils'
import { Button } from '../../atom'

const InputChat = ({ value, onChangeText, onButtonPress, placeholder }) => {
    return (
        <View style={styles.container}>
            <TextInput style={styles.textInput}
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
            />

            <Button type='btn-icon-send'
                onPress={onButtonPress}
                disable={value.length < 1}
            />
        </View>
    )
}

export default InputChat

const styles = StyleSheet.create({
    container: {
        //backgroundColor: 'white',
        flexDirection: 'row'
    },

    textInput: {
        backgroundColor: colors.white,
        borderRadius: 10,
        padding: 14,
        fontSize: 16,
        fontFamily: fonts.primary[600],
        color: colors.text.primary,
        flex: 1,
        marginRight: 8,
        maxHeight: 50


    }
})
