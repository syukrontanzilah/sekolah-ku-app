import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { ILMatematika, ILLogo, Agama, IPA, Bahasa, IPS, Sport, Seni, Komputer } from '../../../asset'
import { fonts, colors } from '../../../utils'

const CategoryGuru = ({category, onPress}) => {
    const Icon = () => {
        if(category=== 'Matematika'){
            return <ILMatematika/>
        }
        if(category === 'IPA'){
            return <IPA/>
        }
        if(category === 'Bahasa') {
            return <Bahasa/>
        }
        if(category === 'IPS'){
            return <IPS/>
        }
        if(category === 'Agama'){
            return <Agama/>
        }
        if(category === 'Kesehatan'){
            return <Sport/>
        }
        if (category === 'Seni'){
            return <Seni/>
        }
        if(category === 'Komputer'){
            return <Komputer/>
        }
        return <ILMatematika/>
    }
    return (
        <TouchableOpacity style={styles.container}
        onPress={onPress}>
            <View style={{ height: 50, width: 50 }}>
                <Icon />
            </View>


            <Text style={styles.desc}>{category}</Text>
        </TouchableOpacity>
    )
}

export default CategoryGuru

const styles = StyleSheet.create({
    container: {
        height: 120,
        width: 120,
        backgroundColor: 'lightblue',
        borderRadius:25, 
        justifyContent: 'center',
        alignItems:'center', 
        marginRight:10,
       
    },
    desc : {
        fontSize: 18,
        marginTop:5,
        fontFamily: fonts.primary[600],
        color: colors.text.primary
    }
})
