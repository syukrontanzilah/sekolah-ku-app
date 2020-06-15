import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { IconBackDark, IconBackWhite } from '../../../asset'


const IconOnly = ({onPress, icon}) => {
    const Icon = () => {
        if(icon === 'back-dark') {
            return <IconBackDark/>
        }
        if(icon === 'back-light'){
            return <IconBackWhite />
        }
        return <IconBackDark/>
    }
    return (
        <TouchableOpacity
        onPress={onPress}>
            <Icon/>
        </TouchableOpacity>
    )
}

export default IconOnly

const styles = StyleSheet.create({})
