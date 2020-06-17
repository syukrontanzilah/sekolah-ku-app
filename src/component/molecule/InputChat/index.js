import React from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import { colors, fonts } from '../../../utils'
import { Button } from '../../atom'

const InputChat = () => {
    return (
        <View style={styles.container}>

            <TextInput style={styles.textInput}
                placeholder='Tulis Pesan disini' />
                <Button type='btn-icon-send' />
        </View>
    )
}

export default InputChat

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white', 
        flexDirection:'row'
    },

    textInput: {
        backgroundColor: colors.border,
        borderRadius: 10,
        padding: 14,
        fontSize: 18,
        fontFamily: fonts.primary[600],
        color: colors.text.primary,
        flex:1,
        marginRight:8,
        maxHeight:50


    }
})
