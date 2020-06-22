import React from 'react'
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native'
import { fonts } from '../../../utils'

const Loading = () => {
    return (
        <View style={styles.wrapper}>
            <ActivityIndicator 
            color = 'darkcyan'
            size='large' />
            <Text style={styles.text}>Tunggu sebentar yah...</Text>
        </View>
    )
}

export default Loading

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.7)',
        position: 'absolute',
        width: '100%',
        height: '100%',

    },
    text: {
        color: 'darkcyan',
        //opacity: 0.8,
        fontSize: 18,
        fontFamily: fonts.primary[600]
    }
})
