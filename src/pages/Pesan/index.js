import React, { useEffect, useState } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { List } from '../../component'
import { Fire } from '../../config'
import { colors, fonts, getData } from '../../utils'

const Pesan = ({ navigation }) => {
    const [historyChat, setHistoryChat] = useState([])
    const [user, setUser] = useState({});


    useEffect(() => {
        getDataUserFromLocal()
        const rootDB = Fire.database().ref()
        const urlHistory = `messages/${user.uid}/`
        const messagesDB = rootDB.child(urlHistory)

        messagesDB
            .on('value', async snapshot => {
                if (snapshot.val()) {
                    const oldData = snapshot.val();
                    const data = [];;

                 const promises = await Object.keys(oldData)
                        .map( async key => {
                            const urlUidGuru = `guru/${oldData[key].uidPartner}`
                            const detailGuru = await rootDB.child(urlUidGuru)
                                .once('value')

                            data.push({
                                id: key,
                                detailGuru: detailGuru.val(),
                                ...oldData[key]
                            })
                        })
                        await Promise.all(promises)
                    setHistoryChat(data)
                }
            })
    }, [user.uid])

    const getDataUserFromLocal = () => {
        getData('user')
            .then(res => {
                setUser(res)
            })
    }
    return (
        <View style={styles.page}>

            <Text style={styles.pesan}>Pesan</Text>
            <ScrollView
                showsVerticalScrollIndicator={false}>
                {
                    historyChat.map(chat => {
                        const dataGuru = {
                            id: chat.detailGuru.uid,
                            data: chat.detailGuru
                        }
                        return (
                            <List
                                key={chat.id}
                                profile={{uri: chat.detailGuru.photo}}
                                name={chat.detailGuru.fullName}
                                desc={chat.lastContentChat}
                                onPress={() => navigation.navigate('Chatting', dataGuru )} />
                        )

                    })
                }
            </ScrollView>


        </View>
    )
}

export default Pesan

const styles = StyleSheet.create({
    page: {
        padding: 16,
        paddingTop: 10
    },
    pesan: {
        marginBottom: 16,
        fontSize: 25,
        fontFamily: fonts.primary[800],
        color: colors.secondary
    }
})
