import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Header, Profile, Gap, Input, Button, } from '../../component'
import { colors, getData, storeData, showError } from '../../utils'
import { ScrollView } from 'react-native-gesture-handler';
import { Fire } from '../../config';
import { showMessage } from 'react-native-flash-message';
import ImagePicker from 'react-native-image-picker'
import { ILNullPhoto } from '../../asset';

const EditProfile = ({ navigation, route }) => {
    const profilePP = route.params;
    const [profile, setProfile] = useState({
        fullName: '',
        kelas: '',
        email: '',
        //photo: photo
    })

    const [password, setPassword] = useState('');
    const [photo, setPhoto] = useState(ILNullPhoto);
    const [photoForDB, setPhotoForDB] = useState('')

    useEffect(() => {
        getData('user').then(res => {
            const data = res;
            data.photoForDB = res?.photo?.length > 1 ? res.photo : ILNullPhoto;
            const tempPhoto = res?.photo?.length > 1 ? {uri: res.photo} : ILNullPhoto;
            setPhoto({ tempPhoto });
            setProfile(data)
        })
    }, [])

    const update = () => {
        if (password.length > 0) {
            if (password.length < 6) {
                showMessage({
                    message: 'Ops.. Kata Sandi nya ga boleh kurang dari 6 karakter',
                    type: 'default',
                    backgroundColor: 'salmon'
                })
            } else {
                updatePassword()
                updateProfileData()
                //navigation.replace('MainApp')
            }
        } else {
            updateProfileData()
            //navigation.replace('MainApp')
        }
    }

    //update password
    const updatePassword = () => {
        Fire.auth()
            .onAuthStateChanged(user => {
                if (user) {
                    user.updatePassword(password)
                        .catch(err => {
                            showError(err.message)
                        })
                }
            })
    }
    //update data profile
    const updateProfileData = () => {
        const data = profile;
        data.photo = photoForDB;
        Fire.database()
            .ref(`users/${profile.uid}/`)
            .update(data)
            .then(() => {
                storeData('user', data)
                .then(()=>{
                    navigation.replace('MainApp')
                })
            }).catch(err => {
                showError(err.message)
            })
    }


    const changeText = (key, value) => {
        setProfile({
            ...profile,
            [key]: value,
        })
    }

    const getImage = () => {
        ImagePicker.launchImageLibrary(
            { quality: 0.7, maxWidth: 250, maxHeight: 250 }, 
            (response) => {
            if (response.didCancel || response.error) {
                showError('Oops.. kayaknya kamu tidak  memilih photo nya?')
            } else {
                const source = { uri: response.uri }

                setPhotoForDB(`data:${response.type};base64, ${response.data}`);
                setPhoto(source)
            }
        })
    }
    return (
        <View style={styles.page}>
            <Header title='Ubah Profile' onPress={() => navigation.goBack()} />

            <ScrollView
                showsVerticalScrollIndicator={false}
                style={{ flex: 1 }}>
                <Gap height={10} />

                <Profile
                    onPress={getImage}
                    isRemove
                    photo={photo} />
                <Gap height={20} />
                <View style={{ paddingHorizontal: 40 }}>
                    <Input label='Nama Lengkap'
                        value={profile.fullName}
                        onChangeText={value => changeText('fullName', value)}
                    />
                    <Gap height={10} />

                    <Input label='Kelas'
                        value={profile.kelas}
                        onChangeText={value => changeText('kelas', value)} />
                    <Gap height={10} />


                    <Input label='Alamat Email'
                        value={profile.email}
                        disable />
                    <Gap height={10} />

                    <Input label='Kata Sandi'
                        secureTextEntry
                        value={password}
                        onChangeText={value => setPassword(value)}
                    />
                    <Gap height={20} />

                    <Button
                        onPress={update}
                        title='Simpan Profile' />
                    <Gap height={20} />

                </View>

            </ScrollView>



        </View>
    )
}

export default EditProfile

const styles = StyleSheet.create({
    page: {
        backgroundColor: colors.white,
        flex: 1
    }
})
