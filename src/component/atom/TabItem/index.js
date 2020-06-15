import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { IconHome, IconPesan, IconSekolah } from '../../../asset'
import { fonts } from '../../../utils'

const TabItem = ({title, active, onPress, onLongPress}) => {
    const Icon = () => {
        if (title === 'Beranda') {
            return active ? <View style={{ height: 25, width: 25 }}>
                <IconHome /> 
            </View> : 
            <View style={{ height: 25, width: 25, opacity: 0.6 }}>
            <IconHome /> 
        </View> 

        }
        if (title === 'Pesan') {
            return active ? <View style={{ height: 25, width: 25 }}>
                <IconPesan />
            </View> : 
            <View style={{ height: 25, width: 25, opacity: 0.6 }}>
            <IconPesan />
        </View>
        }
        if (title === 'Sekolah') {
            return active ? <View style={{ height: 25, width: 25 }}>
                <IconSekolah />
            </View> : 
            <View style={{ height: 25, width: 25, opacity: 0.6 }}>
            <IconSekolah />
        </View>
        }
        return <View style={{ height: 25, width: 25 }}>
            <IconHome />
        </View>
    }
    return (
        <TouchableOpacity style={styles.container}
        onPress={onPress}
        onLongPress ={onLongPress}>
            <Icon />
            <Text style={styles.text(active)}>{title}</Text>
        </TouchableOpacity>
    )
}

export default TabItem

const styles = StyleSheet.create({
    container: {
        alignItems:'center',

    },
    text: (active) => ({
        color: active ? 'white' : '#00b3b3',
        fontSize:13,
        fontFamily : fonts.primary[600]
    })

})
