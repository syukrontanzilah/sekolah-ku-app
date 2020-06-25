import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Header, ChatItem, InputChat, Gap, Button, } from '../../component'
import { fonts, colors, getData, showError, getChatTime, setDateChat } from '../../utils'
import { ScrollView } from 'react-native-gesture-handler'
import { Fire } from '../../config'

const Chatting = ({ navigation, route }) => {
    const dataGuru = route.params;
    const [chatContent, setChatContent] = useState('');
    const [user, setUser] = useState({})

    useEffect(() => {
        getData('user')
            .then(res => {
                setUser(res)
            })
    }, [])

    const chatSend = () => {
        const today = new Date();
        const data = {
            sendBy: user.uid,
            chatDate: today.getTime(),
            chatTime: getChatTime(today),
            chatContent: chatContent,
        };

        const chatID = `${user.uid}_${dataGuru.data.uid}`

        const urlFirebase = `chatting/${chatID}/allChat/${setDateChat(today)}`
        //kirim ke firebase
        Fire.database()
            .ref(
                urlFirebase,
            )
            .push(data)
            .then(() => {
                setChatContent('')
            })
            .catch(err => {
                showError(err.message)
            })


    }

    return (
        <View style={styles.page}>
            <Header
                onPress={() => navigation.goBack()}
                type='dark-profile'
                title={dataGuru.data.fullName}
                desc={dataGuru.data.subject}
                photo={{ uri: dataGuru.data.photo }}
            />

            <ScrollView
                showsVerticalScrollIndicator={false}
                style={styles.content}>
                <Text style={styles.chatDate}>Senin 27 Mei 2020</Text>
                <ChatItem isMe />
                <ChatItem />
                <ChatItem isMe />

                <Gap height={50} />
            </ScrollView>

            <View style={styles.buttonWrap}>
                <View style={{ flex: 1, }}>
                    <InputChat
                        value={chatContent}
                        onChangeText={(value) => setChatContent(value)}
                        onButtonPress={chatSend}
                        placeholder={`Tulis pesan utk Bpk/ibu ${dataGuru.data.fullName}`}
                    />
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
