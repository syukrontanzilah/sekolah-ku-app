import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { fonts, colors } from '../../utils'
import {ListBerita, Gap} from '../../component'
import { News1, News2, News3, News4 } from '../../asset'

const Sekolah = () => {
    return (
        <View style={styles.page}>
            <Text style={styles.title}>Kabar Sekolah</Text>
            <Text style={styles.desc}>Halaman ini memuat Berita dan Informasi seputar sekolah kita dan juga Artikel karya Siswa-Siswi kita</Text>

            <ScrollView
                style={styles.content}
                showsVerticalScrollIndicator={false}>

                <ListBerita 
                title = 'Pengumuman Hasil Evaluasi Belajar Semester 2 MTs. Negeri At-Tanzil, Tahun 2020/2021' 
                desc='Senin, 21 Juni 2020'
                image= {News1} />
                <ListBerita 
                title='Sekolah kita meraih Juara 1 Cerdas Cermat tingkat SLTP Se-Jawa Barat' desc='Jumat, 18 Juni 2020'
                image={News2} />
                <ListBerita 
                title='Tim Paskibraka MTs. At-Tanzil beraksi di Monas' 
                desc='Senin 15 Juni 2020'
                image={News3}/>
                <ListBerita title= 'Cara Mengatasi Malas Menghafal Saat menghadapi Ujian akhir (Oleh: Karissa Aprillia, Kelas 9A)' desc='Jumat 10 Juni 2020'
                image={News4}/>

                <Gap height={500}/>
            </ScrollView>




        </View>
    )
}

export default Sekolah

const styles = StyleSheet.create({
    page: {
        flex: 1,
        padding: 16
    },
    content: {
        paddingTop: 10
    },
    title: {
        fontSize: 20,
        fontFamily: fonts.primary[800],
        color: colors.text.primary
    },
    desc: {
        paddingTop: 2,
        fontSize: 15,
        fontFamily: fonts.primary[600],
        color: colors.text.primary,
        borderBottomColor: colors.border,
        borderBottomWidth: 1, paddingBottom: 10
    }
})
