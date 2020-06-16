import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Header, ChatItem, InputChat, Gap, Button, } from '../../component'
import { fonts, colors } from '../../utils'
import { ScrollView } from 'react-native-gesture-handler'

const Chatting = ({ navigation }) => {
    return (
        <View style={styles.page}>
            <Header
                onPress={() => navigation.goBack()}
                type='dark-profile'
                title='Alissa Soebandono SAg.' />

            <ScrollView
                showsVerticalScrollIndicator={false}
                style={styles.content}>
                <Text style={styles.chatDate}>Senin 27 Mei 2020</Text>
                <ChatItem />
                <ChatItem />
                <ChatItem />


                <Gap height={1000} />
            </ScrollView>



            <View style={styles.buttonWrap}>
                <View style={{ flex: 1,  }}>
                    <InputChat />
                </View>

            </View>



        </View>
    )
}

export default Chatting

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: colors.white
    },
    content: {
        flex: 1
    },
    chatDate: {
        fontSize: 11,
        fontFamily: fonts.primary[600],
        color: colors.text.secondary,
        marginVertical: 15,
        textAlign: 'center'
    },
    buttonWrap: {
        flexDirection: 'row',
        backgroundColor: 'white',
        paddingHorizontal: 10,
        paddingBottom: 8,
        paddingTop: 5

    }
})
