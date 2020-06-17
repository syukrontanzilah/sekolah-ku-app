import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { Guru2, IconNext, IconEdit, IconLanguage, IconHelp, IconExit } from '../../../asset'
import { colors, fonts } from '../../../utils'

const List = ({profile, name, desc, type, onPress, icon}) => {
    const Icon = () => {
        if(icon === 'edit-profile'){
            return <IconEdit/>
        }
        if(icon === 'language'){
            return <IconLanguage/>
        }
        if(icon === 'help'){
            return <IconHelp/>
        }
        if(icon === 'exit'){
            return <IconExit />
        }
        return <IconEdit/>
    }
    return (
        <TouchableOpacity
        onPress ={onPress}
        style={styles.container}>
            {
                icon ? <Icon/> : <Image
                style={styles.avatar}
                source={profile} />
            }
           
            <View style={{flex:1, marginLeft:14}}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.desc}>{desc}</Text>
            </View>
            {
                type === 'next' && <IconNext/>
            }
           

        </TouchableOpacity>
    )
}

export default List

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderBottomColor: colors.border,
        borderBottomWidth: 1,
        paddingVertical: 10,
        alignItems: 'center',
        justifyContent: 'space-between'

    },
    avatar: {
        height: 50,
        width: 50,
        borderRadius: 50 / 2,
    },
    name: {
        fontSize: 17,
        fontFamily: fonts.primary[600],
        color: colors.secondary

    },
    desc: {
        fontSize: 14,
        fontFamily: fonts.primary[600],
        color: colors.text.secondary
    }
})
