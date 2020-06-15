import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { Header, Button, Link, Gap } from '../../component'
import { ILNullPhoto, ILNullPhoto2, IconPlus } from '../../asset'
import { colors, fonts } from '../../utils'

const UploadFoto = () => {
    return (
        <View style={styles.page}>
            <Header title='Upload Foto' />
            <View style={styles.content}>
                <View style={styles.profile}>
                    <View style={styles.avatarWrapper}>
                        <Image source={ILNullPhoto} style={styles.avatar} />
                        <IconPlus style={styles.addFoto} />
                    </View>

                    <Gap height={20} />

                    <Text style={styles.name}>Andi Nugraha</Text>
                    <Text style={styles.desc}>Kelas 2A</Text>
                </View>


                <View>
                    <Button title='Upload foto & Lanjutkan' />
                    <Gap height={20} />
                    <Link title='Lewati dulu' align='center' size={16} />
                    <Gap height={60} />
                </View>
            </View>



        </View>
    )
}

export default UploadFoto

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
    profile: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center'
    },
    avatarWrapper: {
        height: 130,
        width: 130,
        borderWidth: 1,
        borderColor: colors.border,
        backgroundColor: colors.border,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',

    },
    avatar: {
        height: 110,
        width: 110
    },
    addFoto: {
        position: 'absolute',
        bottom: 8,
        right: 6
    },
    name: {
        fontSize: 24,
        color: colors.text.primary,
        fontFamily: fonts.primary[800],
        textAlign: 'center'

    },
    desc: {
        fontSize: 18,
        color: colors.text.secondary,
        fontFamily: fonts.primary[600],
        textAlign: 'center'
    }

})
