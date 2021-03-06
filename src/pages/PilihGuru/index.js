import React, { useEffect, useState } from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { Gap, Header, List } from '../../component'
import { Fire } from '../../config'
import { colors } from '../../utils'

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
                                onPress={() => navigation.navigate('GuruProfile', guru)}
                                key={guru.id}
                                profile={{uri: guru.data.photo}}
                                name={guru.data.fullName}
                                desc={guru.data.subject}
                                type='next' />
                        )
                    })
                }





                <Gap height={100} />
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
