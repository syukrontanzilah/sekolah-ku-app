import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ILLogo } from '../../asset'
import { Input, Link, Button, Gap } from '../../component/atom'

const Login = () => {
    return (
        <View style={styles.page}>
            <View style={{ height: 80, width: 80 }}>
                <ILLogo />
            </View>
            <View>
                <Text style={styles.desc}>Masuk dan mulai bertanya pada Dosen</Text>
                <Input label='Email Address' />
                <Gap height={20} />
                <Input label='Password' />
                <Gap height={10} />
                <Link title='Forgot Password' size={12} />
                <Gap height={20} />
                <Button title='Log In' />
                <Gap height={15} />
                <Link title='Create New Account' size={16} align='center' />
            </View>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    page: {
        padding: 40,
        flex: 1
    },
    desc: {
        fontSize: 20,
        fontFamily: 'Lato-Regular',
        maxWidth: 150,
        //color: 'darkcyan',
        marginBottom: 40,
        marginTop: 20
    }
})
