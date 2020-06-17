import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { ILLogo } from '../../asset'
import { Input, Link, Button, Gap } from '../../component/atom'
import { colors, fonts } from '../../utils'

const Login = ({ navigation }) => {
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
                    <Input label='Alamat Email' />
                    <Gap height={20} />
                    <Input label='Kata Sandi' />
                    <Gap height={10} />
                    <Link title='Lupa kata sandi' size={12} />
                    <Gap height={20} />
                    <Button title='Masuk'
                        onPress={() => navigation.replace('MainApp')}
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
