import React, { useState } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { showMessage } from 'react-native-flash-message'
import { useDispatch, useSelector } from 'react-redux'
import { ILLogo } from '../../asset'
import { Button, Gap, Input, Link } from '../../component/atom'
import { Fire } from '../../config'
import { colors, fonts, storeData, useForm, showError } from '../../utils'

const Login = ({ navigation }) => {
    const [form, setForm] = useForm({ email: '', password: '' })
    const dispatch = useDispatch();

    const login = () => {
        dispatch({ type: 'SET_LOADING', value: true })
        Fire.auth()
            .signInWithEmailAndPassword(form.email, form.password)
            .then(res => {
                dispatch({ type: 'SET_LOADING', value: false })
                Fire.database().ref(`users/${res.user.uid}/`)
                    .once('value')
                    .then(resDB => {
                        if (resDB.val()) {
                            storeData('user', resDB.val())
                            navigation.replace('MainApp')
                        }
                    });
            })
            .catch(err => {
                dispatch({ type: 'SET_LOADING', value: false })
                showError(err.message)
            })
    }
    return (

        <View style={styles.page}>
            <ScrollView
                showsVerticalScrollIndicator={false}>
                <Gap height={40} />

                <View style={{ height: 80, width: 80 }}>
                    <ILLogo />
                </View>
                <View>
                    <Text style={styles.desc}>Masuk dan lebih dekat dengan Sekolah mu</Text>

                    <Input
                        label='Alamat Email'
                        value={form.email}
                        onChangeText={(value) => setForm('email', value)} />
                    <Gap height={20} />

                    <Input
                        label='Kata Sandi'
                        secureTextEntry
                        value={form.password}
                        onChangeText={(value) => setForm('password', value)} />
                    <Gap height={10} />

                    <Link title='Lupa kata sandi' size={12} />
                    <Gap height={20} />
                    <Button title='Masuk'
                        onPress={login}
                    />
                    <Gap height={15} />
                    <Link
                        onPress={() => navigation.navigate('Register')}
                        title='Buat akun baru' size={16} align='center' />
                </View>
                <Gap height={15} />

            </ScrollView>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    page: {
        padding: 40,
        flex: 1,
        paddingVertical: 0,

    },
    desc: {
        fontSize: 20,
        fontFamily: fonts.primary[800],
        maxWidth: 200,
        color: colors.text.primary,
        marginBottom: 40,
        marginTop: 20
    }
})
