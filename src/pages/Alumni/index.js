import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import { fonts, colors, showError } from '../../utils'
import { Header } from '../../component'
import { Fire } from '../../config'

const Alumni = ({ navigation }) => {
    const [categoryLulusan, setCategoryLulusan] = useState([])
    useEffect(() => {
        Fire.database()
            .ref('category_lulusan')
            .once('value')
            .then(res => {
                if (res.val()) {
                    const data = res.val();
                    const filterData = data.filter(el => el !== null)
                    setCategoryLulusan(filterData)
                }
            })
            .catch(err => {
                showError(err.message)
            })
    }, [])
    return (
        <View style={styles.page}>
            <Header title='Buku Alumni Siswa' type='dark' onPress={() => navigation.goBack()} />

            <ScrollView
                showsVerticalScrollIndicator={false}>
                <Text style={styles.judul}>Ini adalah halaman Alumi Siswa-siswi MTs. At-Tanzil, Kota Sukabumi. Di halaman ini kita dapat melihat data informasi Siswa-siswi yang telah menyelesaikan pendidikan di sekolah kita berdasarkan tahun kelulusannya.</Text>
                {
                    categoryLulusan.map(item => {
                        return (
                            <TouchableOpacity
                                key={item.id}
                                onPress={() => navigation.navigate('AlumniList', item)}
                                style={styles.wrapperDate}>
                                <Text style={styles.textDate}>{item.category}</Text>
                            </TouchableOpacity>
                        )
                    })
                }
            </ScrollView>
        </View>
    )
}

export default Alumni

const styles = StyleSheet.create({
    page: {
        backgroundColor: colors.white,
        flex: 1,
    },
    judul: {
        fontFamily: fonts.primary[600],
        fontSize: 16,
        color: colors.text.primary,
        borderBottomColor: colors.border,
        borderBottomWidth: 1,
        paddingBottom: 10,
        paddingTop: 10,
        marginHorizontal: 16,
        marginBottom: 10
    },
    wrapperDate: {
        height: 50,
        backgroundColor: 'salmon',
        marginHorizontal: 16,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginVertical: 5
    },
    textDate: {
        paddingHorizontal: 10,
        fontSize: 20,
        fontFamily: fonts.primary[800],
        color: 'white'
    }
})
