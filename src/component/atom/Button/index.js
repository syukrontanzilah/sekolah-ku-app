import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { colors, fonts } from '../../../utils';
import IconOnly from './IconOnly';
import BtnIconSend from './BtnIconSend';


const Button = ({ type, title, onPress, icon, disable }) => {
    if (type === 'btn-icon-send') {
        return <BtnIconSend disable={disable} />
    }
    if (type === 'icon-only') {
        return <IconOnly icon={icon} onPress={onPress} />
    }
    if (disable) {
      return ( <View
            style={styles.disableBg} >
            <Text style={styles.disableText}>{title}</Text>
      </View> )
    }
    return (
        <TouchableOpacity
            style={styles.container(type)}
            onPress={onPress}
        >
            <Text style={styles.text(type)}>{title}</Text>
        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({
    container: (type) => ({
        backgroundColor: type === 'secondary' ? colors.white : colors.primary,
        paddingVertical: 10,
        borderRadius: 10,
    }),
    disableBg: {
        paddingVertical: 10,
        borderRadius: 10,
        backgroundColor: colors.border
    },
    disableText: {
        fontSize: 18,
        fontFamily: fonts.primary[600],
        textAlign: 'center',
        color: '#d1d1d1'
    },
    text: (type) => ({
        fontSize: 18,
        color: type === 'secondary' ? colors.text.primary : colors.white,
        textAlign: 'center',
        fontFamily: fonts.primary[600]

    })
})
