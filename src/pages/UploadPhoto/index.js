import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { Header, Button, Link, Gap } from '../../component'
import { colors, fonts } from '../../utils'
import { ILNullPhoto, IconAdd } from '../../asset'

const UploadPhoto = ({ navigation }) => {
    return (
        <View style={styles.page}>
            <Header title='Upload Foto' onPress={() => navigation.goBack()} />
            <View style={styles.content}>
                <View style={{ alignItems: 'center', flex: 1, justifyContent: 'center' }}>
                    <View style={styles.avatarWrapper}>
                        <Image source={ILNullPhoto}
                            style={styles.avatar} />
                        <IconAdd style={styles.addFoto} />
                    </View>
                    <Gap height={20} />

                    <Text style={styles.name}>Seyla Marissa</Text>
                    <Text style={styles.desc}>2A</Text>
                </View>


                <View>
                    <Button
                        onPress={()=> navigation.replace('MainApp')}
                        title='Upload dan Lanjutkan..' />
                    <Gap height={30} />
                    <Link title='Skip For This' align='center' size={16}
                    onPress={()=> navigation.replace('MainApp')} />
                    <Gap height={40} />

                </View>

            </View>

        </View>
    )
}

export default UploadPhoto

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: colors.white
    },
    content: {
        paddingHorizontal: 40,
        flex: 1,
        justifyContent: 'space-between'
    },
    avatarWrapper: {
        width: 130,
        height: 130,
        borderWidth: 1,
        borderColor: 'lightgray',
        borderRadius: 130 / 2,
        backgroundColor: 'lightgray',
        justifyContent: 'center',
        alignItems: 'center'
    },
    avatar: {
        height: 110,
        width: 110,
    },
    addFoto: {
        position: 'absolute',
        bottom: 10,
        right: 0
    },
    name: {
        fontSize: 24,
        color: colors.secondary,
        fontFamily: fonts.primary[600],
        textAlign: 'center'
    },
    desc: {
        fontSize: 18,
        color: colors.text.secondary,
        fontFamily: fonts.primary[600],
        textAlign: 'center'
    },


})
