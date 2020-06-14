import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

const Button = ({type, title, onPress}) => {
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
        backgroundColor: type === 'secondary' ? 'white' : 'darkcyan',
        paddingVertical:10,
        borderRadius:10,
    }) ,
    text : (type) => ({
        fontSize: 16,
        color: type === 'secondary' ? 'black' : 'white',
        textAlign: 'center',
        fontFamily : 'Lato-Regular'
        
    })
})
