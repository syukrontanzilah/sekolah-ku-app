import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { DummyUser } from '../../../asset'
import { colors, fonts } from '../../../utils'
import { Gap } from '../../atom'

const Profile = () => {
    return (
        <View style={styles.container}>
            <View style={styles.borderProfile}>
                <Image
                    style={styles.avatar}
                    source={DummyUser} />
            </View>
            <Gap height={10}/>
            <Text style={styles.name}>Alwi Assegaf</Text>
            <Text style={styles.desc}>Kelas 7A</Text>


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
        fontSize:20,
        color: colors.secondary
    },
    desc: {
        fontFamily: fonts.primary[800],
        fontSize:18,
        color: colors.text.secondary
    }
})
