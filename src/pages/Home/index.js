import React, { useEffect, useState } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { CategoryGuru, FavoriteGuru, Gap, HomeProfile, InfoSekolah } from '../../component'
import { Fire } from '../../config'
import { colors, fonts, showError } from '../../utils'


const Home = ({ navigation }) => {
    const [profileSekolah, setProfileSekolah] = useState([])
    const [categoryGuru, setCategoryGuru] = useState([])
    const [guruGuru, setGuruGuru] = useState([])
    useEffect(() => {
        getCategoryGuru()
        getRandomGuru()
        getProfileSekolah()
    }, [])


    const getRandomGuru = () => {
        Fire.database()
            .ref('guru/')
            .orderByChild('rate')
            .limitToLast(5)
            .once('value')
            .then(res => {
                if (res.val()) {
                    const oldData = res.val()
                    const data = [];
                    Object.keys(oldData).map(key => {
                        data.push({
                            id: key,
                            data: oldData[key]
                        })
                    })
                    setGuruGuru(data)
                }
            })
            .catch(err => {
                showError(err.message)
            });
    }

    const getCategoryGuru = () => {
        Fire.database()
            .ref('category_guru')
            .once('value')
            .then(res => {
                if (res.val()) {
                    const data = res.val();
                    const filterData = data.filter(el => el !== null);
                    setCategoryGuru(filterData)
                }
            })
            .catch(err => {
                showError(err.message)
            });
    }

    const getProfileSekolah = () => {
        Fire.database()
            .ref('profilesekolah')
            .once('value')
            .then(res => {
                if (res.val()) {
                    const data = res.val();
                    const filterData = data.filter(el => el !== null);
                    setProfileSekolah(filterData)
                }
            })
            .catch(err => {
                showError(err.message)
            });
    }

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
                            categoryGuru.map(item => {
                                return <CategoryGuru
                                    onPress={() => navigation.navigate('PilihGuru', item)}
                                    key={item.id}
                                    category={item.category} />
                            })
                        }
                        <Gap width={6} />

                    </ScrollView>

                </View>

                <Gap height={15} />
                <Text style={styles.textDesc}>Guru Favorite Mu</Text>
                <View style={{ paddingHorizontal: 16, paddingVertical: 15 }}>
                    {
                        guruGuru.map(guru => {
                            return (
                                <FavoriteGuru
                                    key={guru.id}
                                    avatar={{ uri: guru.data.photo }}
                                    name={guru.data.fullName}
                                    desc={guru.data.subject}
                                    onPress={() => navigation.navigate('GuruProfile', guru)} />
                            )
                        })
                    }

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
                                    image={item.image}
                                    onPress={() => navigation.navigate('Artikel', item)} />
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
