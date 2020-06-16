import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { ILMatematika, ILLogo } from '../../../asset'
import { fonts, colors } from '../../../utils'

const CategoryGuru = () => {
    return (
        <TouchableOpacity style={styles.container}>
            <View style={{ height: 60, width: 60 }}>
                <ILMatematika />
            </View>


            <Text style={styles.desc}>Matematika</Text>
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
