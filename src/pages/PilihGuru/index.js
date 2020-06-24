import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { Header, List, Gap } from '../../component'
import { Guru1, Guru2, IconNext } from '../../asset'
import { colors } from '../../utils'
import { Fire } from '../../config'

const PilihGuru = ({ navigation, route }) => {
    const [listGuru, setListGuru] = useState([])
    const itemCategory = route.params;
    useEffect(() => {
        callGuruByCategory(itemCategory.category)
    }, [])
    const callGuruByCategory = (category) => {
        Fire.database()
            .ref('guru/')
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
                    setListGuru(data)
                }

            })
    }
    return (
        <View style={styles.page}>
            <Header
                title={`Guru ${itemCategory.category}`} type='dark'
                onPress={() => navigation.goBack()} />
            <ScrollView
                style={styles.content}
                showsVerticalScrollIndicator={false}>
                {
                    listGuru.map(guru => {
                        return (
                            <List
                                onPress={() => navigation.navigate('Chatting')}
                                key={guru.id}
                                profile={{uri: guru.data.photo}}
                                name={guru.data.fullName}
                                desc={guru.data.subject}
                                type='next' />
                        )
                    })
                }





                <Gap height={1000} />
            </ScrollView>


        </View>
    )
}

export default PilihGuru

const styles = StyleSheet.create({
    page: {
        backgroundColor: colors.white,
        flex: 1,
    },
    content: {
        paddingHorizontal: 16
    }
})
