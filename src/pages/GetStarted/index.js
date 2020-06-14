import React from 'react'
import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import { ILLogo, ILGetStarted } from '../../asset'
import { Button, Gap } from '../../component'

const GetStarted = () => {
    return (
        <ImageBackground style={styles.page}
            source={ILGetStarted}
        >
            {/* <View style={{ height: 100, width: 100, opacity: 0.8, backgroundColor: 'rgba(0,0,0,0.8)'}}>
                <ILLogo />
            </View> */}
            <View style={{ 
            backgroundColor: 'rgba(0,0,0,0.7)', 
            padding:20, 
            borderRadius:20,
            maxWidth: '50%',
            borderBottomLeftRadius: 0
            }}>
                <Text style={styles.text}>"Bertanya ke dosen bisa kapan saja dan dimana saja"</Text>

            </View>

            <View style={{marginTop:50}}>
                <Button title='Get Started' />
                <Gap height ={16} />
                <Button title='Sign in' type='secondary' />
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
        fontSize:20,
        //textAlign:'center',
        fontFamily: 'Aaargh'
    }

})
