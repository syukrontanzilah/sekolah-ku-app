import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { colors, fonts } from '../../../utils'

const FavoriteGuru = ({onPress, name, desc, avatar}) => {
    return (
        <TouchableOpacity 
        onPress={onPress}
        style={styles.container}>
            <Image source={avatar} style={styles.avatar} />

            <View style={{justifyContent:'center', flex:1}}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.desc}>{desc}</Text>
            </View>


        </TouchableOpacity>
    )
}

export default FavoriteGuru

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginBottom:10
    },
    imageWrapper: {

    },
    avatar: {
        height: 55, width: 55,
        borderRadius: 55 / 2,
        marginRight:12
    },
    name: {
        fontSize:17, 
        fontFamily: fonts.primary[600],
        color: colors.secondary
    },
    desc :{
        fontSize:15, 
        fontFamily: fonts.primary[600],
        color: colors.text.secondary,
        marginTop:3
    }
})
