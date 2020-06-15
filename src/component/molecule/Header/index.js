import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Gap, Button } from '../../atom'
import { colors, fonts } from '../../../utils'

const Header = ({onPress, title}) => {
    return (
        <View style={styles.container}>
                <Button type ='icon-only' icon='back-dark' onPress={onPress} />
            <Text style={styles.text}>{title}</Text>
            <Gap width={20} />
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        paddingVertical: 20,
        backgroundColor: colors.white,
        flexDirection: 'row',
        alignItems: 'center'
    },
    text: {
        flex: 1,
        textAlign: 'center',
        fontFamily: fonts.primary[800],
        fontSize: 21,
        color: colors.text.primary

    }
})
