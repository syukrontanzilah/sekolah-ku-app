import React, { useState } from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { Header, Input, Button, Gap, } from '../../component'
import { colors, fonts } from '../../utils'

const Register = ({ navigation }) => {
    const [fullName, setFullName] = useState('');
    const [kelas, setKelas] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

    const onContinue = () => {

        // navigation.navigate('UploadPhoto')
    }
    return (
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
                    value={fullName}
                    onChangeText={(value) => setFullName(value)}
                    placeholder='Contoh: Andi Pratama' />
                <Gap height={20} />

                <Input label='Kelas'
                    value={kelas}
                    onChangeText={(value) => setKelas(value)}
                    placeholder='Contoh: 7A' />
                <Gap height={20} />


                <Input label='Alamat Email'
                    value={email}
                    onChangeText={(value) => setEmail(value)}
                    placeholder='Contoh: andi123@gmail.com' />
                <Gap height={20} />


                <Input label='Kata Sandi'
                    value={password}
                    onChangeText={(value) => setPassword(value)}
                    secureTextEntry
                    placeholder='Kata sandi tidak bolah kurang dari 6 karakter' />
                <Gap height={20} />

                <Button
                    onPress={onContinue}
                    title='Selanjutnya' />
                <Gap height={20} />

            </ScrollView>







        </View>
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
