import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native'
import { Header, List, Gap } from '../../component'
import { DummyUser, IconHomeBlack, IconInfoBlack, IconBintang, IconNama } from '../../asset'
import { colors, fonts } from '../../utils'
import { Fire } from '../../config'

const AlumniList = ({ navigation, route }) => {
    const [listAlumni, setListAlumni] = useState([]);
    const itemCategory = route.params;

    useEffect(() => {
        callAlumniByCategory(itemCategory.category)
    }, [])

    const callAlumniByCategory = (category) => {
        Fire.database()
            .ref('alumni/')
            .orderByChild('category')
            .equalTo(category)
            .once('value')
            .then(res => {
                if (res.val()) {
                    const oldData = res.val()
                    const data = []
                    Object.keys(oldData)
                        .map(item => {
                            data.push({
                                id: item,
                                data: oldData[item]

                            })
                        })
                    setListAlumni(data)
                }
            })
    }
    return (
        <View style={styles.page}>
            <Header
                onPress={() => navigation.goBack()}
                type='dark' title={`Alumni Angkatan ${itemCategory.category}`} />
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={styles.content}>

                {
                    listAlumni.map(alumni => {
                        return (
                            <View style={styles.wrapper}
                                key={alumni.id}>
                                <Image
                                    source={{ uri: alumni.data.photo }}
                                    style={styles.imageWrapper} />

                                <View style={styles.wrapperText}>
                                    <View style={styles.textDesc}>
                                        <IconNama />
                                        <Text style={styles.name}>{alumni.data.fullName}</Text>
                                    </View>

                                    <View style={styles.textDesc}>
                                        <IconInfoBlack />
                                        <Text style={styles.desc}>{alumni.data.birth}</Text>
                                    </View>
                                    <View style={styles.textDescHome}>
                                        <View style={styles.iconHome}>
                                            <IconHomeBlack />
                                        </View>

                                        <Text style={styles.desc}>{alumni.data.address}</Text>
                                    </View>
                                    <View style={styles.textDescHome}>
                                        <View style={styles.iconHome}>
                                            <IconBintang />
                                        </View>
                                        <Text style={styles.desc}>{alumni.data.motto}</Text>
                                    </View>
                                </View>
                            </View>
                        )
                    })
                }


                <Gap height={50} />
            </ScrollView>

        </View>
    )
}

export default AlumniList

const styles = StyleSheet.create({
    page: {
        flex: 1
    },
    content: {
        paddingHorizontal: 16,
    },
    wrapper: {
        flexDirection: 'row',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: colors.border,
        paddingRight: 10
    },
    imageWrapper: {
        height: 60,
        width: 60,
        borderRadius: 60 / 2,
        marginRight: 10
    },
    wrapperText: {
        flex: 1,
        paddingRight: 10
    },

    textDesc: {
        flexDirection: 'row',
        alignItems: 'center',

    },
    textDescHome: {
        flexDirection: 'row',

    },
    iconHome: {
        paddingTop: 2
    },
    name: {
        fontSize: 15,
        fontFamily: fonts.primary[800],
        color: colors.primary,
        marginLeft: 4

    },
    desc: {
        fontSize: 15,
        fontFamily: fonts.primary[600],
        color: colors.secondary,
        marginLeft: 4
    }

})
