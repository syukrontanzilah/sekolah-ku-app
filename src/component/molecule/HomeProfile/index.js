import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { ILLogo, ILNullPhoto, DummyUser } from '../../../asset'
import { fonts, colors } from '../../../utils'

const HomeProfile = ({onPress}) => {
    return (
        <TouchableOpacity
        onPress={onPress}>
            <View style={styles.imageWrapper}>
                <Image
                    // source={ILNullPhoto} 
                    source={DummyUser}
                    style={styles.image} />
            </View>
            <View style={{}}>
                <Text style={styles.text}>Muhammad Alwi Assegaff</Text>
                {/* <Text style={{textAlign: 'right'}}>Kelas 7F</Text> */}
            </View>
        </TouchableOpacity>
    )
}

export default HomeProfile

const styles = StyleSheet.create({
    container: {

    },
    imageWrapper: {
        backgroundColor: 'lightgray', 
        height: 53, 
        width: 53, 
        borderRadius: 53 / 2, 
        justifyContent: 'center', alignItems: 'center'
    },
    image: {
        height: 48, width: 48, borderRadius: 48 / 2
    },
    text: {
        fontFamily: fonts.primary[600],
        color: colors.white
    }
})
