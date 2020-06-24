import React, { useEffect, useState } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { Guru1, Guru2, JSONCategoryGuru } from '../../asset'
import { CategoryGuru, FavoriteGuru, Gap, HomeProfile, InfoSekolah } from '../../component'
import { colors, fonts, getData, showError } from '../../utils'
import { Fire } from '../../config'


const Home = ({ navigation }) => {
    const [profileSekolah, setProfileSekolah] = useState([])

    useEffect(() => {
        Fire.database()
            .ref('profilesekolah')
            .once('value')
            .then(res => {
                if (res.val()) {
                    setProfileSekolah(res.val())
                }
            })
            .catch(err => {
                showError(err.message)
            })

    }, [])

    return (
        <View style={styles.page}>
            {/* <View style={{ position: 'absolute', top: 16, right: 16 }}>
                <HomeProfile />
            </View> */}
            <ScrollView
                style={{ position: 'relative' }}
                showsVerticalScrollIndicator={false}>

                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between', backgroundColor: 'darkcyan',
                    alignItems: 'center',
                    paddingHorizontal: 16,
                    paddingVertical: 5
                }}>
                    <View style={{ flex: 1 }}>
                        <HomeProfile onPress={() => navigation.navigate('UserProfile')} />
                    </View>

                    <View style={{
                        alignItems: 'flex-end',
                        flex: 1
                    }}>
                        <Text style={styles.sekolah}>MTs. Negeri At-Tanzil</Text>
                        <Text style={styles.kota}>Kec. Cicurug Kota Sukabumi Provinsi Jawa Barat</Text>
                        {/* <Text style={styles.desc}>Selalu terdepan dalam prestasi</Text> */}
                    </View>

                </View>





                <Gap height={20} />
                <View style={styles.welcome}>
                    <Text style={styles.textDesc}>Mau bertanya pelajaran apa hari ini? Guru-guru mu ada disini!</Text>
                </View>

                <View style={{ paddingVertical: 10 }}>
                    <ScrollView horizontal
                        showsHorizontalScrollIndicator={false}>
                        <Gap width={16} />
                        {
                            JSONCategoryGuru.data.map(item => {
                                return <CategoryGuru
                                    onPress={() => navigation.navigate('PilihGuru')}
                                    key={item.id}
                                    category={item.category} />
                            })
                        }
                        <Gap width={6} />

                    </ScrollView>

                </View>

                <Gap height={15} />
                <Text style={styles.textDesc}>Random Guru</Text>
                <View style={{ paddingHorizontal: 16, paddingVertical: 15 }}>
                    <FavoriteGuru
                        avatar={Guru1}
                        name='Alissa Subandono'
                        desc='Bahasa Indonesia'
                        onPress={() => navigation.navigate('GuruProfile')} />

                    <FavoriteGuru
                        avatar={Guru2}
                        name='Jayanti atmaja'
                        desc='Bahasa Jepang' />

                    <FavoriteGuru
                        avatar={Guru2}
                        name='Julian ferdinand'
                        desc='Bahasa mandarin' />
                </View>

                <Gap height={10} />

                <Text style={styles.textDesc}>Profile Sekolah</Text>
                <View style={{ paddingHorizontal: 16, paddingVertical: 15 }}>

                    {
                        profileSekolah.map(item => {
                            return (
                                <InfoSekolah
                                    key={item.id}
                                    title={item.title}
                                    date={item.date}
                                    image={item.image} />

                            )
                        })
                    }
                </View>
                <Gap height={30} />
            </ScrollView>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    page: {
        flex: 1,
        //padding: 16

    },
    sekolah: {
        fontFamily: fonts.primary[800],
        fontSize: 20,
        color: colors.secondary,

    },
    kota: {
        fontFamily: fonts.primary[600],
        fontSize: 15,
        color: colors.border,
        textAlign: 'right',
        opacity: 0.8
    },
    welcome: {

    },
    textDesc: {
        fontSize: 20,
        paddingHorizontal: 16,
        fontFamily: fonts.primary[800],
        maxWidth: 300,
        color: colors.secondary
    }

})
