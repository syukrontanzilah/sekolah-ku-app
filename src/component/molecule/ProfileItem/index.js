import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { colors, fonts } from '../../../utils'

const ProfileItem = ({label, value}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <Text style={styles.value}>{value}</Text>

        </View>
    )
}

export default ProfileItem

const styles = StyleSheet.create({
    container: {
        borderBottomWidth: 1,
        borderBottomColor: colors.border,
        paddingVertical: 10
    },
    label: {
        fontSize: 16,
        fontFamily: fonts.primary[600],
        color: colors.text.secondary,
        marginBottom:5

    },
    value: {
        fontSize: 18,
        fontFamily: fonts.primary[600],
        color: colors.secondary
    }
})
