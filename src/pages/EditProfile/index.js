import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Header, Profile, Gap, Input, Button, } from '../../component'
import { colors, getData, storeData } from '../../utils'
import { ScrollView } from 'react-native-gesture-handler';
import { Fire } from '../../config';
import { showMessage } from 'react-native-flash-message';
import ImagePicker from 'react-native-image-picker'
import { ILNullPhoto } from '../../asset';

const EditProfile = ({ navigation }) => {
    const [profile, setProfile] = useState({
        fullName: '',
        kelas: '',
        email: '',
    })

    const [password, setPassword] = useState('');
    const [photo, setPhoto] = useState(ILNullPhoto);
    const [photoForDB, setPhotoForDB] = useState('')

    useEffect(() => {
        getData('user').then(res => {
            const data = res;
            setPhoto({ uri: res.photo });
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
                navigation.replace('MainApp')
            }
        } else {
            updateProfileData()
            navigation.replace('MainApp')
        }
    }

    //update password
    const updatePassword = () => {
        Fire.auth()
            .onAuthStateChanged(user => {
                if (user) {
                    user.updatePassword(password)
                        .catch(err => {
                            showMessage({
                                message: err.message,
                                type: 'default',
                                backgroundColor: 'salmon'
                            })
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
            }).catch(err => {
                showMessage({
                    message: err.message,
                    type: 'default',
                    backgroundColor: 'salmon'
                })
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
            { quality: 0.8, maxWidth: 250, maxHeight: 250 }, 
            (response) => {
            if (response.didCancel || response.error) {
                showMessage({
                    message: 'Oops.. Kayaknya kamu tidak memilih fotonya',
                    type: 'default',
                    backgroundColor: 'salmon',

                })
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
                        onChangeText={(value) => changeText('fullName', value)}
                    />
                    <Gap height={10} />

                    <Input label='Kelas'
                        value={profile.kelas}
                        onChangeText={(value) => changeText('kelas', value)} />
                    <Gap height={10} />


                    <Input label='Alamat Email'
                        value={profile.email}
                        disable />
                    <Gap height={10} />

                    <Input label='Kata Sandi'
                        secureTextEntry
                        value={password}
                        onChangeText={(value) => setPassword(value)}
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
