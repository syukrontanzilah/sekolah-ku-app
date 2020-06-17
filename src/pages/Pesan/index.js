import React, { useState } from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { List } from '../../component'
import { fonts, colors } from '../../utils'
import { Guru1, Guru2 } from '../../asset'

const Pesan = ({navigation}) => {
    const [guru] = useState([
        {
            id: 1,
            profile: Guru1,
            name: 'Prilli Latuconsina SPd.',
            desc: 'Baik bu guru...'
        },
        {
            id: 2,
            profile: Guru2,
            name: 'Alissa Soebandono SPd.',
            desc: 'wah siap bu guru...'
        },
        {
            id: 3,
            profile: Guru2,
            name: 'Siti Saadah S Ag..',
            desc: 'Ntapppsss...'
        }
    ])
    return (
        <View style={styles.page}>

            <Text style={styles.pesan}>Pesan</Text>
            <ScrollView
                showsVerticalScrollIndicator={false}>
                {
                    guru.map(guru => {
                        return (
                             <List 
                        key ={guru.id}
                        profile={guru.profile}
                        name= {guru.name}
                        desc={guru.desc}
                        onPress={()=> navigation.navigate('Chatting')} />
                        )
                       
                    })
                }
            </ScrollView>


        </View>
    )
}

export default Pesan

const styles = StyleSheet.create({
    page: {
        padding: 16,
        paddingTop: 10
    },
    pesan: {
        marginBottom: 16,
        fontSize: 25,
        fontFamily: fonts.primary[800],
        color: colors.secondary
    }
})
