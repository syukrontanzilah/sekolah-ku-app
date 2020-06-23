import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { ILLogo, ILNullPhoto, DummyUser } from '../../../asset'
import { fonts, colors, getData } from '../../../utils'

const HomeProfile = ({ onPress }) => {
    const [profile, setProfile] = useState({
        photo: ILNullPhoto,
        fullName: '',
        kelas: ''
    })

    useEffect(() => {
        getData('user')
            .then(res => {
                const data = res;
                data.photo = { uri: res.photo }
                setProfile(res)
            })
    }, [])
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={onPress}>
            <View style={styles.imageWrapper}>
                <Image
                    // source={ILNullPhoto} 
                    source={profile.photo}
                    style={styles.image} />
            </View>
            <View style={{flex:1}}>
                <Text style={styles.text}>{profile.fullName}</Text>
                <View style={{flexDirection:'row'}}>
                <Text style={styles.label}>Kelas: </Text>
                <Text style={styles.kelas}>{profile.kelas}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default HomeProfile

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    imageWrapper: {
        backgroundColor: 'lightgray',
        height: 53,
        width: 53,
        borderRadius: 53 / 2,
        justifyContent: 'center', alignItems: 'center',
        marginRight:6
    },
    image: {
        height: 48, width: 48, borderRadius: 48 / 2
    },
    text: {
        fontFamily: fonts.primary[600],
        color: colors.white,
        textTransform: 'capitalize',
    },
    kelas: {
        fontFamily: fonts.primary[600],
        color: colors.white,
        textTransform: 'uppercase'
    },
    label: {
        fontFamily: fonts.primary[600],
        color: colors.white,
    }
})
