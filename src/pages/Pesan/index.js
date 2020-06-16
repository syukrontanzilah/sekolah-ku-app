import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { List } from '../../component'
import { fonts, colors } from '../../utils'

const Pesan = () => {
    return (
        <View style={styles.page}>

            <Text style={styles.pesan}>Pesan</Text>
            <ScrollView
            showsVerticalScrollIndicator={false}>
                <List />
                <List />
                <List />
            </ScrollView>


        </View>
    )
}

export default Pesan

const styles = StyleSheet.create({
    page: {
       padding: 16,
       paddingTop:10
    },
    pesan :{
        marginBottom: 16,
        fontSize: 25,
        fontFamily: fonts.primary[800],
        color: colors.secondary
    }
})
