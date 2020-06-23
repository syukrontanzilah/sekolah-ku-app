import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { Header, Button, Link, Gap } from '../../component'
import { colors, fonts } from '../../utils'
import { ILNullPhoto, IconAdd, IconRemove } from '../../asset'
import ImagePicker from 'react-native-image-picker';
import { showMessage } from 'react-native-flash-message'

const UploadPhoto = ({ navigation, route }) => {
    const {fullName, kelas } = route.params
    const [hasPhoto, setHasPhoto] = useState(false)
    const [photo, setPhoto] = useState(ILNullPhoto)
    const getImage = () => {
        ImagePicker.launchImageLibrary({}, (response) => {
            if (response.didCancel || response.error) {
                showMessage({
                    message: 'Oops.. Kayaknya kamu tidak memilih fotonya',
                    type: 'default',
                    backgroundColor: 'salmon',

                })
            } else {
                const source = { uri: response.uri }
                setPhoto(source)
                setHasPhoto(true)
            }

        });
    }
    return (
        <View style={styles.page}>
            <Header title='Upload Foto'
            //onPress={() => navigation.goBack()} 
            />
            <View style={styles.content}>
                <View style={{ alignItems: 'center', flex: 1, justifyContent: 'center' }}>
                    <TouchableOpacity style={styles.avatarWrapper}
                        onPress={getImage}>
                        <Image source={photo}
                            style={styles.avatar} />
                        {hasPhoto && <IconRemove style={styles.addFoto} />}
                        {!hasPhoto && <IconAdd style={styles.addFoto} />}


                    </TouchableOpacity>
                    <Gap height={20} />

                    <Text style={styles.name}>{fullName}</Text>
                    <Text style={styles.desc}>{kelas}</Text>
                </View>


                <View>
                    <Button
                        disable={!hasPhoto}
                        onPress={() => navigation.replace('MainApp')}
                        title='Upload dan Lanjutkan..' />
                    <Gap height={30} />
                    <Link title='Lewati dulu yang ini' align='center' size={16}
                        onPress={() => navigation.replace('MainApp')} />
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
        borderRadius: 110 / 2
    },
    addFoto: {
        position: 'absolute',
        bottom: 10,
        right: 0,
        backgroundColor: 'white',
        borderRadius: 100
    },
    name: {
        fontSize: 24,
        color: colors.secondary,
        fontFamily: fonts.primary[600],
        textAlign: 'center',
        textTransform: 'capitalize'
    },
    desc: {
        fontSize: 18,
        color: colors.text.secondary,
        fontFamily: fonts.primary[600],
        textAlign: 'center',
        textTransform: 'uppercase'
    },


})
