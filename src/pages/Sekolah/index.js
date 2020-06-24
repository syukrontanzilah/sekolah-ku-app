import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { fonts, colors, showError } from '../../utils'
import { ListBerita, Gap } from '../../component'
import { News1, News2, News3, News4 } from '../../asset'
import { Fire } from '../../config'

const Sekolah = () => {
    const [news, setNews] = useState([]);
    useEffect(() => {
        Fire.database()
            .ref('news')
            .once('value')
            .then(res => {
                if (res.val()) {
                    setNews(res.val())
                }
            })
            .catch(err => {
                showError(err.message)
            })
    }, [])
    return (
        <View style={styles.page}>
            <Text style={styles.title}>Kabar Sekolah</Text>
            <Text style={styles.desc}>Halaman ini memuat Berita dan Informasi seputar sekolah kita dan juga Artikel karya Siswa-Siswi kita</Text>

            <ScrollView
                style={styles.content}
                showsVerticalScrollIndicator={false}>

                    {
                        news.map(item => {
                            return(
                                <ListBerita
                                key ={item.id}
                                title ={item.title}
                                date = {item.date}
                                image ={item.image} />
                            )
                        })
                    }

                <Gap height={100} />
            </ScrollView>




        </View>
    )
}

export default Sekolah

const styles = StyleSheet.create({
    page: {
        flex: 1,
        padding: 16
    },
    content: {
        paddingTop: 10
    },
    title: {
        fontSize: 20,
        fontFamily: fonts.primary[800],
        color: colors.text.primary
    },
    desc: {
        paddingTop: 2,
        fontSize: 15,
        fontFamily: fonts.primary[600],
        color: colors.text.primary,
        borderBottomColor: colors.border,
        borderBottomWidth: 1, paddingBottom: 10
    }
})
