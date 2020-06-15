import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { colors } from '../../../utils'

const Link = ({title, size, align}) => {
    return (
        <TouchableOpacity>
            <Text style={styles.text(size, align)}>{title}</Text>
        </TouchableOpacity>
    )
}

export default Link

const styles = StyleSheet.create({
    text: (size, align) => ({
        fontSize: size,
        color: colors.text.secondary,
        fontFamily: 'Lato-Regular',
        textDecorationLine: 'underline',
        textAlign: align
        
    })
})
