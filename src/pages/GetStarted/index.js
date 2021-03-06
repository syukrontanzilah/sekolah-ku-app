import React from 'react'
import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import { ILLogo, ILGetStarted } from '../../asset'
import { Button, Gap } from '../../component'

const GetStarted = ({ navigation }) => {
    return (
        <ImageBackground style={styles.page}
            source={ILGetStarted}
        >
            {/* <View style={{ height: 100, width: 100, opacity: 0.8, backgroundColor: 'rgba(0,0,0,0.8)'}}>
                <ILLogo />
            </View> */}
            <View style={{
                backgroundColor: 'rgba(0,0,0,0.7)',
                padding: 20,
                borderRadius: 20,
                maxWidth: '60%',
                borderBottomLeftRadius: 0
            }}>
                <Text style={styles.text}>"Lebih dekat dengan Sekolahmu & Bertanya dengan guru jadi lebih mudah"</Text>

            </View>

            <View style={{ marginTop: 50 }}>
                <Button 
                title='Buat akun baru dulu' 
                onPress={() => navigation.navigate('Register')} />
                <Gap height={16} />
                <Button 
                title='Masuk' 
                type='secondary'
                onPress={() => navigation.navigate('Login')} />
            </View>


        </ImageBackground>
    )
}

export default GetStarted

const styles = StyleSheet.create({
    page: {
        padding: 40,
        flex: 1,
        justifyContent: 'center',
        opacity: 0.8

    },
    text: {
        color: 'white',
        fontSize: 20,
        //textAlign:'center',
        fontFamily: 'Aaargh'
    }

})
