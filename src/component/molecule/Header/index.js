import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { IconBackDark } from '../../../asset'
import { Gap } from '../../atom'
import { colors } from '../../../utils'

const Header = ({}) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <IconBackDark />
            </TouchableOpacity>

            <Text style={styles.text}>text header</Text>
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
        fontFamily: 'Lato-Bold',
        fontSize: 21,
        color: colors.text.primary

    }
})
