import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { fonts, colors } from '../../../utils'
import { Guru1 } from '../../../asset'


const Other = () => {
    return (
        <View style={styles.wrapper}>

            <Image
                source={Guru1} style={styles.avatar} />
            <View>

                <View style={styles.content}>
                    <Text style={styles.text}>iya silahkan, mau bertanya apa? bilang saja</Text>
                </View>

                <Text style={styles.time}>6.00 AM</Text>
            </View>

        </View>
    )
}

export default Other

const styles = StyleSheet.create({
    wrapper: {
        marginBottom: 8,
        alignItems: 'flex-end',
        paddingLeft: 8,
        flexDirection: 'row'
    },
    content: {
        maxWidth: '80%',
        padding: 12,
        backgroundColor: '#00b3b3',
        paddingRight: 18,
        borderRadius: 10,
        borderBottomLeftRadius: 0


    },
    avatar: {
        height: 30,
        width: 30,
        borderRadius: 30 / 2,
        marginRight:5

    },
    text: {
        fontSize: 18,
        fontFamily: fonts.primary[600],
        color: colors.secondary

    },
    time: {
        fontSize: 11,
        fontFamily: fonts.primary[600],
        color: colors.text.secondary
    }
})
