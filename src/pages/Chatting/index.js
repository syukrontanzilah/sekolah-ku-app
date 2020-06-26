import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import { Header, ChatItem, InputChat, Gap, Button, } from '../../component'
import { fonts, colors, getData, showError, getChatTime, setDateChat } from '../../utils'
import { ScrollView } from 'react-native-gesture-handler'
import { Fire } from '../../config'

const Chatting = ({ navigation, route }) => {
    const dataGuru = route.params;
    const [chatContent, setChatContent] = useState('');
    const [user, setUser] = useState({})
    const [chatData, setChatData] = useState([])

    useEffect(() => {
        getDataUserFromLocal()
        const chatID = `${user.uid}_${dataGuru.data.uid}`
        const urlFirebase = `chatting/${chatID}/allChat/`
        Fire.database()
            .ref(urlFirebase)
            .on('value', snapshot => {
                if (snapshot.val()) {
                    const dataSnapshot = snapshot.val();
                    const allDataChat = []
                    Object.keys(dataSnapshot).map(key => {
                        const dataChat = dataSnapshot[key];
                        const newDataChat = [];

                        Object.keys(dataChat).map(itemChat => {
                            newDataChat.push({
                                id: itemChat,
                                data: dataChat[itemChat]
                            })
                        })

                        allDataChat.push({
                            id: key,
                            data: newDataChat
                        })
                    })
                    console.log('alldata chat', allDataChat)
                    setChatData(allDataChat)
                }
            });
    }, [dataGuru.data.uid, user.uid]);

    const getDataUserFromLocal = () => {
        getData('user')
            .then(res => {
                setUser(res)
            })
    }

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
        const urlMessageUser = `messages/${user.uid}/${chatID}`
        const urlMessageGuru = `messages/${dataGuru.data.uid}/${chatID}`
        const dataHistoryChatForUser = {
            lastContentChat: chatContent,
            lastChatDate: today.getTime(),
            uidPartner: dataGuru.data.uid,
        }
        const dataHistoryChatForGuru = {
            lastContentChat: chatContent,
            lastChatDate: today.getTime(),
            uidPartner: user.uid,
        }
        //kirim ke firebase
        Fire.database()
            .ref(urlFirebase)
            .push(data)
            .then(() => {
                setChatContent('');
                // set history for user
                Fire.database().ref(urlMessageUser)
                    .set(dataHistoryChatForUser)

                    // set history for guru
                    Fire.database()
                    .ref(urlMessageGuru)
                    .set(dataHistoryChatForGuru)
            })
            .catch(err => {
                showError(err.message)
            });

    };

    return (
        <ImageBackground style={styles.page}
        source={require('../../asset/ilustration/chatbckg.png')}
        >
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
                {
                    chatData.map(chat => {
                        return (
                            <View key={chat.id}>
                                <Text style={styles.chatDates}>{chat.id}</Text>
                                {
                                    chat.data.map(itemChat => {
                                        const isMe = itemChat.data.sendBy === user.uid
                                        return <ChatItem
                                            key={itemChat.id}
                                            isMe={isMe}
                                            text={itemChat.data.chatContent}
                                            date={itemChat.data.chatTime}
                                            photo={isMe ? null : { uri: dataGuru.data.photo }}
                                        />
                                    })
                                }

                            </View>)
                    })
                }

                {/* <Gap height={50} /> */}
            </ScrollView>

            <View style={styles.buttonWrap}>
                <View style={{ flex: 1, }}>
                    <InputChat
                        value={chatContent}
                        onChangeText={value => setChatContent(value)}
                        onButtonPress={chatSend}
                        placeholder={`Tulis pesan untuk ${dataGuru.data.nickName}
                        `}
                    />
                </View>

            </View>



        </ImageBackground>
    )
}

export default Chatting

const styles = StyleSheet.create({
    page: {
        flex: 1,
        //backgroundColor: colors.white
    },
    content: {
        flex: 1
    },
    chatDates: {
        fontSize: 11,
        fontFamily: fonts.primary[600],
        color: colors.text.secondary,
        marginVertical: 15,
        textAlign: 'center'
    },
    buttonWrap: {
        flexDirection: 'row',
        //backgroundColor: 'white',
        paddingHorizontal: 10,
        paddingBottom: 8,
        paddingTop: 5

    }
})
