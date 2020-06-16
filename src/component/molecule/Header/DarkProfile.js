import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { colors, fonts } from '../../../utils'
import { Button } from '../../atom'
import { Guru1 } from '../../../asset'

const DarkProfile = ({onPress}) => {
    return (
        <View style={styles.container}>
            <Button
            onPress={onPress}
                type='icon-only'
                icon='back-light' />

            <View style={styles.content}>
                <Text style={styles.name}>Prilly Latuconsina</Text>
                <Text style={styles.desc}>Bahasa Indonesia</Text>
            </View>

            <Image source={Guru1} style={styles.avatar} />

        </View>
    )
}

export default DarkProfile

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primary,
        paddingVertical: 10,
        paddingLeft: 20,
        paddingRight: 16,
        flexDirection: 'row',
        alignItems: 'center'
    },
    content: {
        flex: 1,
        alignItems: 'center'
    },
    avatar: {
        height: 50,
        width: 50,
        borderRadius: 50 / 2

    },
    name: {
        fontSize: 20,
        fontFamily: fonts.primary[800],
        color: colors.white
    },
    desc: {
        fontSize: 16,
        fontFamily: fonts.primary[600],
        color: colors.border
    }
})
