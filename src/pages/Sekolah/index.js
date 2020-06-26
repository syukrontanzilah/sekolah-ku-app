import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native'
import { fonts, colors, showError } from '../../utils'
import { ListBerita, Gap } from '../../component'
import { News1, News2, News3, News4, Bahasa } from '../../asset'
import { Fire } from '../../config'

const Sekolah = ({ navigation }) => {
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
                        return (
                            <ListBerita
                                key={item.id}
                                title={item.title}
                                date={item.date}
                                image={item.image}
                                onPress={() => navigation.navigate('ArtikelNews', item)}
                            />
                        )
                    })
                }

                <Gap height={100} />
            </ScrollView>

            {/* data alumni */}
            <TouchableOpacity 
            onPress={()=> navigation.navigate('Alumni')}
            style={{ 
                height: 60, 
                width: 60, 
                backgroundColor: 'salmon', 
                borderRadius: 100, 
                position: 'absolute', 
                bottom: 10, 
                right: 10,  }}>
                <View style={{height:30, width:30, alignSelf: 'center', top:11}}>
                    <Bahasa/> 
                </View>
               
                <Text style={{
                    alignSelf: 'center', 
                    color: 'white', 
                    fontSize:10, 
                    fontFamily: fonts.primary[600],
                    top:10}}>Alumni</Text>
            </TouchableOpacity>


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
