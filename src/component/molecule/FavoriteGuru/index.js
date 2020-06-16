import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { Guru1 } from '../../../asset'
import { fonts, colors } from '../../../utils'

const FavoriteGuru = () => {
    return (
        <View style={styles.container}>
            <Image source={Guru1} style={styles.avatar} />

            <View style={{justifyContent:'center', flex:1}}>
                <Text style={styles.name}>Hafidzah Karimah S.Pd</Text>
                <Text style={styles.desc}>Bahasa Indonesia</Text>
            </View>


        </View>
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
