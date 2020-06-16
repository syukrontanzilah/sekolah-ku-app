import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import { HomeProfile, Gap, CategoryGuru, FavoriteGuru, InfoSekolah } from '../../component'
import { fonts, colors } from '../../utils'
import { JSONCategoryGuru } from '../../asset'


const Home = () => {
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
                        <HomeProfile />
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
                                key={item.id}
                                category ={item.category}/>
                            })
                        }
                        <Gap width={6} />

                    </ScrollView>

                </View>

                <Gap height={15} />
                <Text style={styles.textDesc}>Random Guru</Text>
                <View style={{ paddingHorizontal: 16, paddingVertical: 15 }}>
                    <FavoriteGuru />
                    <FavoriteGuru />
                    <FavoriteGuru />
                </View>

                <Gap height={10} />

                <Text style={styles.textDesc}>Profile Sekolah</Text>
                <View style={{ paddingHorizontal: 16, paddingVertical: 15 }}>
                  <InfoSekolah/>
                  <InfoSekolah/>
                  <InfoSekolah/>

                </View>



                <Gap height={40} />
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
        color: colors.secondary
    },
    kota: {
        fontFamily: fonts.primary[600],
        fontSize: 16,
        color: colors.border,
        textAlign: 'right'
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
