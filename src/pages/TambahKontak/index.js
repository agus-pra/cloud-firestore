import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {Input, Button} from 'react-native-elements';

import firestore from '@react-native-firebase/firestore';

const TambahKontak = ({navigation}) => {
    const [nama, setnama] = useState();
    const [nomorHP, setnomorHP] = useState();
    const [alamat, setalamat] = useState();
  
    const onChangenama = (nama) => {
      setnama(nama);
    };
  
    const onChangenomorHp = (nomorHP) => {
      setnomorHP(nomorHP);
    };
  
    const onChangealamat = (alamat) => {
      setalamat(alamat);
    };


    const AddKontak = () => {
        //if (nama && nomorHP && alamat) {
            firestore()
            .collection('Kontak')
            .add({
                nama: nama,
                nomorHP: nomorHP,
                alamat: alamat,
            })

            .then(function (docRef) {
                console.log('Document written with ID: ', docRef.id);
                alert('Sukses', 'Kontak tersimpan');
                navigation.navigate('Daftar Kontak');
            })
            .catch(function (error) {
                console.error('Error adding document: ', error);
                alert(error);
            });

        //} else {
        //   Alert.alert('Error', 'Silahkan lengkapi data : Nama, NomorHp, dan Alamat');
        //}

    }

        return (
            <SafeAreaView style={styles.pages}>
                <Input
                    placeholder="Masukkan Nama"
                    onChangeText={(nama) => onChangenama(nama)}
                />

                <Input
                    placeholder="Nomor HP"
                    onChangeText={(nomorHP) => onChangenomorHp(nomorHP)}
                />

                <Input
                    placeholder="Alamat"
                    onChangeText={(alamat) => onChangealamat(alamat)}
                />

                <TouchableOpacity style={styles.tombol} onPress={AddKontak}>
                    <Text style={styles.textTombol}>SUBMIT</Text>
                </TouchableOpacity>        
            </SafeAreaView>
        )
};

const styles = StyleSheet.create({
    pages: {
        flex: 1,
        margin: 20
    },
    tombol: {
        backgroundColor: 'green',
        padding: 10,
        borderRadius: 5,
        marginTop: 10
    },
    textTombol: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 16
    }


})

export default TambahKontak;
