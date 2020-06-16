import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { News1 } from '../../../asset'
import { fonts, colors } from '../../../utils'

const InfoSekolah = () => {
    return (
        <View style={styles.container}>
            <View style={{flex:1}}>
                <Text style={styles.title}>Struktur Organisasi Madrasah Tsanawiyyah Negeri At-Tanzil, Kota Sukabumi</Text>
                <Text style={styles.desc}>Senin 29 Juni 2019</Text>
            </View>

            <View>
                <Image
                    source={News1}
                    style={styles.image}
                />
            </View>

        </View>
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
