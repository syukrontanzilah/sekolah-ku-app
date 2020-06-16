import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { Header, List, Gap } from '../../component'
import { Guru1, Guru2, IconNext } from '../../asset'
import { colors } from '../../utils'

const PilihGuru = ({navigation}) => {
    return (
        <View style={styles.page}>
            <Header title='Guru Bahasa' type='dark'
            onPress = {()=> navigation.goBack()} />
            <ScrollView
            style={styles.content}
                showsVerticalScrollIndicator={false}>
                <List 
                onPress = {()=> navigation.navigate('Chatting')}
                profile={Guru1} 
                name='Alissa Soebandono SAg.'
                desc='Bahasa Indonesia' 
                type = 'next' />
                <List profile={Guru2} name='Prilli Latuconsina'
                    desc='Bahasa Inggris' type = 'next' />
                


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
