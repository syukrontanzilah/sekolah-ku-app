import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { fonts, colors } from '../../../utils'
import { Guru1 } from '../../../asset'


const Other = ({text, date, photo}) => {
    return (
        <View style={styles.wrapper}>

            <Image
                source={photo} style={styles.avatar} />
            <View>

                <View style={styles.content}>
                    <Text style={styles.text}>{text}</Text>
                </View>

                <Text style={styles.time}>{date}</Text>
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
        minWidth: '20%',
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
        fontSize: 16,
        fontFamily: fonts.primary[600],
        color: colors.secondary

    },
    time: {
        fontSize: 8,
        fontFamily: fonts.primary[600],
        color: colors.text.secondary
    }
})
