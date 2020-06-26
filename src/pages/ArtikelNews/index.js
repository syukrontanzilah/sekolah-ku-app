import React from 'react'
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import { DummyUser } from '../../asset'
import { fonts, colors, } from '../../utils'
import { Gap } from '../../component'

const ArtikelNews = ({ route }) => {
    const dataNews = route.params;
    return (
        <View style={styles.page}>
            <ScrollView
                showsVerticalScrollIndicator={false}>
                <Text style={styles.title}>{dataNews.title}</Text>
                <Text style={styles.date}>{dataNews.date}</Text>

                <Image style={styles.image} source={{ uri: dataNews.image }} />
                <Text style={styles.body}>{dataNews.body}</Text>
                <Text style={styles.body}>{dataNews.body2}</Text>
                <Gap height={20}/>

            </ScrollView>

        </View>
    )
}

export default ArtikelNews

const styles = StyleSheet.create({
    page: {
        flex: 1,
        paddingTop: 10,
        paddingHorizontal: 16
    },
    title: {
        fontSize: 20,
        fontFamily: fonts.primary[800],
        color: colors.secondary,

    },
    date: {
        paddingTop: 5,
        fontSize: 14,
        fontFamily: fonts.primary[800],
        color: colors.text.secondary,
        paddingBottom:10

    },
    image: {
        height: 250,
        width: '100%',
        marginBottom: 18,
    },
    body: {

        fontSize: 16,
        fontFamily: fonts.primary[600],
        color: colors.secondary,
        textAlign: 'justify'
    }
})
