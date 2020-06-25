import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Header, Profile, ProfileItem, Button, Gap } from '../../component'
import { colors } from '../../utils'

const GuruProfile = ({navigation, route}) => {
    const dataGuru = route.params;
    return (
        <View style={styles.page}>
            <Header title='Profile Guru'
            onPress = {()=> navigation.goBack()}/>
            <Gap height={10} />

            <Profile
                name= {dataGuru.data.fullName}
                desc={dataGuru.data.subject}
                photo ={{uri: dataGuru.data.photo}}
                />
                
            <Gap height={20} />

            <View style={{ paddingHorizontal: 25 }}>
                <ProfileItem label='Alumnus:' value={dataGuru.data.university} />
                <ProfileItem label='Alamat:' value={dataGuru.data.address} />
                <ProfileItem label = 'Motto:' value= {dataGuru.data.motto} />
                <Gap height={30} />
                <Button 
                onPress= {()=> navigation.navigate('Chatting', dataGuru)}
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
