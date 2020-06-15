import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { colors, fonts } from '../../../utils';
import IconOnly from './IconOnly';


const Button = ({type, title, onPress, icon}) => {
    if (type === 'icon-only'){
        return <IconOnly icon={icon} onPress={onPress}/>
    }
    return (
        <TouchableOpacity 
        style={styles.container(type)}
        onPress = {onPress}
        >
            <Text style={styles.text(type)}>{title}</Text>
        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({
    container: (type) => ({
        backgroundColor: type === 'secondary' ? colors.white : colors.primary,
        paddingVertical:10,
        borderRadius:10,
    }) ,
    text : (type) => ({
        fontSize: 16,
        color: type === 'secondary' ? colors.text.primary : colors.white,
        textAlign: 'center',
        fontFamily : fonts.primary[600]
        
    })
})
