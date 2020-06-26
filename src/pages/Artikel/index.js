import React from 'react'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import { Header } from '../../component'
import { colors, fonts } from '../../utils'

const Artikel = ({ navigation, route }) => {
    const dataArtikel = route.params
    return (
        <View style={styles.page}>
            <ScrollView
            showsVerticalScrollIndicator={false}>
                <Header title='Profile Sekolah' onPress={() => navigation.goBack()} />

                <Image source={{uri: dataArtikel.image}} style={styles.image} />
                <View style={styles.content}>
                    <Text style={styles.title}>{dataArtikel.title}</Text>
                    <Text style={styles.date}>Ditulis tanggal {dataArtikel.date}</Text>

                    <Text style={styles.body}>{dataArtikel.body}</Text>
                    <Text style={styles.body}>{dataArtikel.body2}</Text>


                </View>
            </ScrollView>


        </View>
    )
}

export default Artikel

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: colors.white
    },
    image: {
        height: 250,
        width: '100%',
        resizeMode: 'cover',

    },
    content: {
        padding: 10,
        paddingHorizontal:16
    },
    title: {
        fontSize: 20,
        fontFamily: fonts.primary[800],
        color: colors.primary,
    },
    date: {
        fontSize: 12,
        fontFamily: fonts.primary[600],
        color: colors.text.secondary,
        paddingTop:5,
        borderBottomColor: colors.border,
        borderBottomWidth:1, 
        paddingBottom:10
    },
    body: {
        paddingTop:10,
        fontSize: 16,
        fontFamily: fonts.primary[600], 
        textAlign: 'justify',
        color:colors.secondary, 
    }
})
