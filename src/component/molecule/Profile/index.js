import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { DummyUser, IconRemove } from '../../../asset'
import { colors, fonts } from '../../../utils'
import { Gap } from '../../atom'

const Profile = ({ name, desc, isRemove, photo, onPress }) => {
    return (
        <View style={styles.container}>
            {!isRemove && (
                <View style={styles.borderProfile}>
                    <Image
                        style={styles.avatar}
                        source={photo} />
                    {isRemove && <IconRemove style={styles.iconRemove} />}
                </View>
            )}

            {isRemove && (
                <TouchableOpacity
                    onPress={onPress}
                    style={styles.borderProfile}>
                    <Image
                        style={styles.avatar}
                        source={photo} />
                    {isRemove && <IconRemove style={styles.iconRemove} />}
                </TouchableOpacity>
            )}

            <Gap height={15} />
            {
                name && (
                    <View>
                        <Text style={styles.name}>{name}</Text>
                        <Text style={styles.desc}>{desc}</Text>
                    </View>
                )
            }



        </View>
    )
}

export default Profile

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    borderProfile: {
        width: 130,
        height: 130,
        borderWidth: 1,
        borderColor: colors.border,
        borderRadius: 130 / 2,
        backgroundColor: 'lightgray',
        justifyContent: 'center',
        alignItems: 'center'
    },
    avatar: {
        width: 110,
        height: 110,
        borderRadius: 110 / 2
    },
    name: {
        fontFamily: fonts.primary[800],
        fontSize: 20,
        color: colors.secondary,
        textAlign: 'center'
    },
    desc: {
        fontFamily: fonts.primary[600],
        fontSize: 18,
        color: colors.text.secondary,
        textAlign: 'center'
    },
    iconRemove: {
        backgroundColor: 'white',
        borderRadius: 100,
        position: 'absolute',
        bottom: 10,
        right: 0

    }
})
