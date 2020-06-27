import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Header, Profile, List, Gap } from '../../component'
import { colors, getData } from '../../utils'
import { ILNullPhoto } from '../../asset'
import { Fire } from '../../config'
import { showMessage } from 'react-native-flash-message'

const UserProfile = ({ navigation, route }) => {
    const profile = route.params;
    // const [profile, setProfile] = useState({
    //     fullName: '',
    //     kelas: '',
    //     photo: ILNullPhoto,
    // })
    // useEffect(() => {
    //     getData('user')
    //         .then(res => {
    //             const data = res;
    //             data.photo = { uri: res.photo }
    //             setProfile(data)
    //         })
    // }, [])

    const signOut = () => {
        Fire.auth().signOut()
            .then(() => {
                navigation.replace('GetStarted')
            }).catch(err => {
                showMessage({
                    message: err.message,
                    type: 'default',
                    backgroundColor: 'salmon'
                })
            })
    }
    return (
        <View style={styles.page}>
            <Header title='Profile Ku'
                onPress={() => navigation.goBack()} />
            <Gap height={10} />
            {
                profile.fullName.length > 0 && <Profile
                    name={profile.fullName}
                    desc={profile.kelas}
                    photo={profile.photo}
                />
            }



            <Gap height={20} />

            <View style={{ paddingHorizontal: 20 }}>
                <List
                    onPress={() => navigation.navigate('EditProfile')}
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
                    onPress={signOut}
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
        flex: 1

    }
})
