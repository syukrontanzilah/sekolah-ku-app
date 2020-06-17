import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Header, Profile, Gap, Input, Button, } from '../../component'
import { colors } from '../../utils'
import { ScrollView } from 'react-native-gesture-handler'

const EditProfile = ({ navigation }) => {
    return (
        <View style={styles.page}>
            <Header title='Ubah Profile' onPress={() => navigation.goBack()} />

            <ScrollView
                showsVerticalScrollIndicator={false}
                style={{ flex: 1 }}>
                <Gap height={10} />

                <Profile />
                <Gap height={20} />
                <View style={{paddingHorizontal:40}}>
                    <Input label='Nama Lengkap' />
                    <Gap height={10} />

                    <Input label='Kelas' />
                    <Gap height={10} />

                    <Input label='No. Telephone' />
                    <Gap height={10} />

                    <Input label='Alamat Email' />
                    <Gap height={10} />

                    <Input label='Kata Sandi' />
                    <Gap height={20} />

                    <Button title = 'Simpan Profile'/>
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
