import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { Guru2 } from '../../../asset'
import { colors, fonts } from '../../../utils'

const List = () => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.avatar}
                source={Guru2} />
            <View>
                <Text style={styles.name}>Prilli Latuconsina SPd.</Text>
                <Text style={styles.desc}>Terima kasih ya ibu guru..</Text>
            </View>

        </View>
    )
}

export default List

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderBottomColor: colors.border,
        borderBottomWidth: 1,
        paddingVertical: 10,
        alignItems: 'center'

    },
    avatar: {
        height: 50,
        width: 50,
        borderRadius: 50 / 2,
        marginRight: 10
    },
    name: {
        fontSize: 17,
        fontFamily: fonts.primary[600],
        color: colors.secondary

    },
    desc: {
        fontSize: 14,
        fontFamily: fonts.primary[600],
        color: colors.text.secondary
    }
})
