import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ILLogo } from '../../asset'
import { fonts } from '../../utils'

const Splash = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace('GetStarted')
        }, 3000);
    }, [navigation])
    return (
        <View style={styles.page}>

            <View style={{ height: 100, width: 100, opacity: 0.8 }}>
                <ILLogo />
            </View>
            <Text style={styles.text}>Sekolah <Text style={{}}>Ku</Text></Text>
        </View>
    )
}

export default Splash

const styles = StyleSheet.create({
    page: {
        backgroundColor: 'darkcyan',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: 'white',
        fontSize: 23,
        marginTop: 15,
        opacity: 0.8,
        fontFamily: fonts.primary[800]
    }
})

