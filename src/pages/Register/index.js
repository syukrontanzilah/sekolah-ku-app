import React, { useState } from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { Header, Input, Button, Gap, Loading, } from '../../component'
import { colors, fonts, useForm } from '../../utils';
import { Fire } from '../../config'

const Register = ({ navigation }) => {
    const [form, setForm] = useForm({
        fullName: '',
        kelas: '',
        email: '',
        password: '',
    })

    const [loading, setLoading] = useState(false)

    const onContinue = () => {
        setLoading(true);
        Fire.auth()
            .createUserWithEmailAndPassword(form.email, form.password)
            .then((success) => {
                setLoading(false)
            })
            .catch((error) => {
                const errorMessage = error.message;
                setLoading(fase)
                // ...
            });

        // navigation.navigate('UploadPhoto')
    }
    return (
        <>
            <View style={styles.page}>
                <Header
                    title='Daftar Akun'
                    onPress={() => navigation.goBack()}
                />
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    style={styles.container}>
                    <Text style={styles.text}>Isi Form data berikut dengan lengkap sesuai instruksi</Text>
                    <Gap height={20} />
                    <Input label='Nama Lengkap'
                        value={form.fullName}
                        onChangeText={(value) => setForm('fullName', value)}
                        placeholder='Contoh: Andi Pratama' />
                    <Gap height={20} />

                    <Input label='Kelas'
                        value={form.kelas}
                        onChangeText={(value) => setForm('kelas', value)}
                        placeholder='Contoh: 7A' />
                    <Gap height={20} />


                    <Input label='Alamat Email'
                        value={form.email}
                        onChangeText={(value) => setForm('email', value)}
                        placeholder='Contoh: andi123@gmail.com' />
                    <Gap height={20} />


                    <Input label='Kata Sandi'
                        value={form.password}
                        onChangeText={(value) => setForm('password', value)}
                        secureTextEntry
                        placeholder='Kata sandi tidak bolah kurang dari 6 karakter' />
                    <Gap height={20} />

                    <Button
                        onPress={onContinue}
                        title='Selanjutnya' />
                    <Gap height={20} />

                </ScrollView>

            </View>

            {
                loading && <Loading />
            }

        </>

    )
}

export default Register

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: colors.white
    },
    container: {
        padding: 40,
        paddingTop: 0
    },
    text: {
        fontSize: 18,
        fontFamily: fonts.primary[800],
        marginTop: 20,
        //maxWidth: 160,
        color: colors.text.primary,

    }

})
