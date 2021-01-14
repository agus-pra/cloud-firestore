import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
//import AntIcon from 'react-native-vector-icons/AntDesign';
import {Input, Button} from 'react-native-elements';
import firestore from '@react-native-firebase/firestore';

const DetailKontak = ({navigation, route}) => {

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

    const UpdateKontak = () => {
        let db = firestore().collection('Kontak');
    
        db.doc(route.params.Kontak.id)
          .update({
            nama: nama,
            nomorHP: nomorHP,
            alamat: alamat,
          })
          .then(function (docRef) {
            alert('Product successfully updated');
            navigation.navigate('Daftar Kontak');
          })
          .catch(function (error) {
            alert(error);
          });
      };
    
    let deleteData = firestore().collection('Kontak');

    const deleteKontak = (key) => {
    deleteData
      .doc(key)
      .delete()
      .then(() => {
        alert('Product successfully deleted');
        navigation.navigate('Daftar Kontak')
      })
      .catch((err) => {
        console.log(err);
      });
    };



  return (
            <View style={styles.wrapper}>
              <View style={styles.product}>
                <View>
                  <Input 
                    label="Nama"
                    placeholder={route.params.Kontak.nama}
                    onChangeText={(nama) => onChangenama(nama)}
                />
                </View>
                <View>
                  <Input
                    label="No. Hp"
                    placeholder={route.params.Kontak.nomorHP}
                    onChangeText={(nomorHP) => onChangenomorHp(nomorHP)}
                  />
                </View>
                <View>
                  <Input
                    label="Alamat"
                    placeholder={route.params.Kontak.alamat}
                    onChangeText={(alamat) => onChangealamat(alamat)}
                />
                </View>
              </View>
              <View style={styles.action}>
                <Button
                    title="Hapus Kontak"
                    type="outline"
                    onPress={() => 
                        deleteKontak(route.params.Kontak.id)
                    }
                    />
                <Button
                    title="Edit Kontak"
                    type="outline"
                    onPress={UpdateKontak}
                    />
              </View>

              
            </View>
  );
};

const styles = StyleSheet.create({
      product: {
        display: 'flex',
        //flexDirection: 'row',
        justifyContent: 'space-between',
      },
      action: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop : 30,
      },
      wrapper: {
        display: 'flex',
        borderWidth: 1,
        borderColor: 'green',
        padding: 20,
        margin: 20,
        borderRadius : 5
      },
});

export default DetailKontak;
