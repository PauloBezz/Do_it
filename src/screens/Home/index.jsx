import { Text, View, TouchableOpacity } from  'react-native';
import { styles } from './style'
import SideBar from '../../../components/SideBar';
import React from 'react';  

export function Home(){

    return(
        <View style={styles.container}>
        <SideBar name={'Atila'}/>

        </View>
    )
}