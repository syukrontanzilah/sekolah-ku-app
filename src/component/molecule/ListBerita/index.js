import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { News1 } from '../../../asset'
import { fonts, colors } from '../../../utils'

const ListBerita = ({image, title, desc}) => {
    return (
        <TouchableOpacity style={styles.container}>
            <Image
                source={image}
                style={styles.image} />
            <View style={{ flex: 1, paddingRight:5 }}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.desc}>{desc}</Text>
            </View>

        </TouchableOpacity>
    )
}

export default ListBerita

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingVertical: 8,
        borderBottomColor: colors.border,
        borderBottomWidth: 1,
        marginBottom: 5

    },
    image: {
        width: 100, height: 70,
        borderRadius: 10,
        marginRight: 10

    },
    title: {
        fontSize: 17,
        fontFamily: fonts.primary[800],
        color: colors.text.primary,
        //maxWidth: '99%'

    },
    desc: {
        fontSize: 14,
        fontFamily: fonts.primary[600],
        color: colors.text.secondary,
        marginTop:5
    }


})
