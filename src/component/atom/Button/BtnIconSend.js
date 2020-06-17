import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { IconSendDark, IconSendLight } from '../../../asset'
import { colors } from '../../../utils'

const BtnIconSend = ({disable}) => {
    return (
        <TouchableOpacity style={styles.wrapper(disable)}>
            {
                disable && <IconSendDark/>
            }
            {
                !disable && <IconSendLight/>
            }
           
        </TouchableOpacity>
    )
}

export default BtnIconSend

const styles = StyleSheet.create({
    wrapper: (disable) => ({
        backgroundColor: disable ? colors.border : 'darkcyan', 
        justifyContent:'center',
        alignItems:'center',
        width:50, height:50,
        borderRadius: 10, 
    }),
})
