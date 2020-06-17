import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Header, Profile, List, Gap } from '../../component'
import { colors } from '../../utils'

const UserProfile = ({navigation}) => {
    return (
        <View style={styles.page}>
            <Header title='Profile Ku' 
            onPress={()=> navigation.goBack()} />
            <Gap height={10}/>

            <Profile name = 'Alwi Assegaff' desc = '8A' />

            <Gap height={20}/>

            <View style={{paddingHorizontal:20}}>
                <List
                onPress ={()=> navigation.navigate('EditProfile')}
                    name='Edit Profile'
                    desc='Kamu bisa merubah profile mu disini'
                    type='next' icon='edit-profile' />

                <List
                    name='Bahasa'
                    desc='Ops sementara tersedia dlm Bahasa Indonesia'
                    type='next'
                    icon='language' />

                <List
                    name='Bantuan'
                    desc='Klik untuk bantuan'
                    type='next'
                    icon='help' />

                <List
                    name='Log Out'
                    desc='Keluar dari Akun ini'
                    type='next'
                    icon='exit' />
            </View>




        </View>
    )
}

export default UserProfile

const styles = StyleSheet.create({
    page: {
        backgroundColor: colors.white,
        flex:1

    }
})
