import React from 'react'
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { colors, fonts } from '../../../utils'

const InfoSekolah = ({title, date, image}) => {
    return (
        <TouchableOpacity style={styles.container}>
            <View style={{flex:1}}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.desc}>{date}</Text>
            </View>

            <View>
                <Image
                    source={{uri: image}}
                    style={styles.image}
                />
            </View>

        </TouchableOpacity>
    )
}

export default InfoSekolah

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row', 
        marginBottom:10,
        borderBottomWidth:1,
        borderBottomColor: colors.border,
        paddingBottom:10,
        paddingTop:5
    },
    title: {
        fontSize: 17,
        fontFamily: fonts.primary[600],
        color: colors.text.primary
    },
    desc: {
        fontSize: 13,
        fontFamily: fonts.primary[600],
        color: colors.text.secondary
    },
    image: {
        height: 80,
        width: 100, 
        borderRadius: 10
    }
})
