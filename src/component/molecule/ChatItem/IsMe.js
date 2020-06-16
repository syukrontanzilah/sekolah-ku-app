import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { fonts, colors } from '../../../utils'


const IsMe = () => {
    return (
        <View style={styles.wrapper}>
        <View style={styles.content}>
            <Text style={styles.text}>Assalamualaikum ibu guru, saya mau bertanya pelajaran yang kemarin </Text>
        </View>

        <Text style={styles.time}>6.00 AM</Text>
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
        backgroundColor: '#cceeff',
        paddingRight: 18,
        borderRadius: 10,
        borderBottomRightRadius: 0


    },
    text: {
        fontSize: 18,
        fontFamily: fonts.primary[600],
        color: colors.secondary

    },
    time: {
        fontSize: 11,
        fontFamily: fonts.primary[600],
        color: colors.text.secondary
    }
})
