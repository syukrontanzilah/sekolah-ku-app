import React, { useState } from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { ILLogo } from '../../asset'
import { Input, Link, Button, Gap } from '../../component/atom'
import { colors, fonts, useForm, storeData } from '../../utils'
import { Fire } from '../../config'
import { showMessage } from 'react-native-flash-message'
import { Loading } from '../../component'

const Login = ({ navigation }) => {
    const [form, setForm] = useForm({ email: '', password: '' })
    const [loading, setLoading] = useState(false)

    const login = () => {
        setLoading(true)
        Fire.auth().signInWithEmailAndPassword(form.email, form.password)
            .then(res => {
                setLoading(false)
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
                setLoading(false)
                showMessage({
                    message: err.message,
                    type: 'default',
                    backgroundColor: 'salmon'
                })
            })
    }
    return (
        <>
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
            {
                loading && <Loading />
            }

        </>
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
