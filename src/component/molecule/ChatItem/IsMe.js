import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { fonts, colors } from '../../../utils'


const IsMe = ({text, date}) => {
    return (
        <View style={styles.wrapper}>
        <View style={styles.content}>
            <Text style={styles.text}>{text}</Text>
        </View>

        <Text style={styles.time}>{date}</Text>
    </View>
    )
}

export default IsMe


const styles = StyleSheet.create({
    wrapper: {
        marginBottom: 8,
        alignItems: 'flex-end',
        paddingRight: 10
    },
    content: {
        maxWidth: '70%',
        padding: 12,
        backgroundColor: '#ccf2ff',
        paddingRight: 18,
        borderRadius: 10,
        borderBottomRightRadius: 0


    },
    text: {
        fontSize: 16,
        fontFamily: fonts.primary[600],
        color: colors.secondary

    },
    time: {
        fontSize: 8,
        fontFamily: fonts.primary[600],
        color: colors.text.secondary
    }
})
