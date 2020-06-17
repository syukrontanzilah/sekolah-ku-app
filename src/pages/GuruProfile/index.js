import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Header, Profile, ProfileItem, Button, Gap } from '../../component'
import { colors } from '../../utils'

const GuruProfile = ({navigation}) => {
    return (
        <View style={styles.page}>
            <Header title='Profile Guru'
            onPress = {()=> navigation.goBack()}/>
            <Gap height={10} />

            <Profile
                name='Alissa Soebandono SAg'
                desc='Bahasa Indonesia' />
            <Gap height={20} />

            <View style={{ paddingHorizontal: 25 }}>
                <ProfileItem label='Alumnus:' value='Universitas Indonesia' />
                <ProfileItem label='Alamat:' value='Cigombong, Bogor' />
                <ProfileItem label = 'Motto:' value= 'Sekali Hidup Hiduplah yang berarti, jadilah manusia yang bermanfaat bagi orang lain' />
                <Gap height={30} />
                <Button 
                onPress= {()=> navigation.navigate('Chatting')}
                title='Mulai Bertanya' />
            </View>



        </View>
    )
}

export default GuruProfile

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: colors.white
    }
})
