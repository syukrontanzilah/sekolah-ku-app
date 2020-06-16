import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Gap, Button } from '../../atom'
import { colors, fonts } from '../../../utils'
import DarkProfile from './DarkProfile'

const Header = ({onPress, title, type,}) => {
    if(type === 'dark-profile'){
        return <DarkProfile onPress = {onPress} />
    }
    return (
        <View style={styles.container(type)}>
                <Button type ='icon-only' icon={type === 'dark' ? 'back-light' : 'back-dark'} onPress={onPress} />
            <Text style={styles.text(type)}>{title}</Text>
            <Gap width={20} />
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container:(type) => ({
        paddingHorizontal: 16,
        paddingVertical: 20,
        backgroundColor:type === 'dark' ? colors.primary : colors.white,
        flexDirection: 'row',
        alignItems: 'center'
    }),
    text: (type) => ({
        flex: 1,
        textAlign: 'center',
        fontFamily: fonts.primary[800],
        fontSize: 21,
        color: type === 'dark' ? colors.white : colors.text.primary

    })
})
