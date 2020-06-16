import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { Guru2, IconNext } from '../../../asset'
import { colors, fonts } from '../../../utils'

const List = ({profile, name, desc, type}) => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.avatar}
                source={profile} />
            <View style={{flex:1}}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.desc}>{desc}</Text>
            </View>
            {
                type === 'next' && <IconNext/>
            }
           

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
        alignItems: 'center',
        justifyContent: 'space-between'

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
