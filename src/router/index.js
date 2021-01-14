import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Home, TambahKontak, DetailKontak }from '../pages'

const Stack = createStackNavigator();

const Router = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Daftar Kontak" component={Home} />
            <Stack.Screen name="Tambah Kontak" component={TambahKontak} />
            <Stack.Screen name="Detail Kontak" component={DetailKontak} />
        </Stack.Navigator>
    )
}

export default Router
