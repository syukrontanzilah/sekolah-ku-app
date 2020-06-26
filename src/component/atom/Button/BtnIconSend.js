import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { IconSendDark, IconSendLight } from '../../../asset'
import { colors } from '../../../utils'

const BtnIconSend = ({disable, onPress}) => {
    if (disable){
        return (
            <View style={styles.wrapper(disable)}>
             <IconSendDark/>
            </View>
        )
    }
    return (
        <TouchableOpacity style={styles.wrapper(disable)}
        onPress={onPress}
        >
         <IconSendLight/>
        </TouchableOpacity>
    )
}

export default BtnIconSend

const styles = StyleSheet.create({
    wrapper: (disable) => ({
        backgroundColor: disable ? colors.white : 'darkcyan', 
        justifyContent:'center',
        alignItems:'center',
        width:50, height:50,
        borderRadius: 50/2, 
    }),
})
