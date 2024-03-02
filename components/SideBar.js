import React, {useState} from "react";
import { StyleSheet } from "react-native";
import {Text, 
        Image, 
        View, 
        TouchableOpacity,
        Modal,
} from 'react-native';
import menu from '../src/svg/menu.png'
import bell from '../src/svg/bell.png'
import exit from '../src/svg/exit.png'
import { SafeAreaView } from "react-native-safe-area-context";

export default function SideBar(props){

    const [modalVisible, setModalVisible]= useState(false);

    return (
        <SafeAreaView >
            <View style={styles.container}>
            <View style={styles.text}>
                <Text style={styles.title}>Hi, {props.name.split(' ')[0]}...</Text>
                <Text style={styles.well}>Welcome back</Text>
            </View>
            <Modal transparent visible={modalVisible}>
                <SafeAreaView style={styles.modal}>
                    <View style={styles.sidebar}>
                        <View style={styles.topo}>
                            <TouchableOpacity style={styles.exit} onPress={()=>setModalVisible(false)}>
                                <Image source={exit} />
                            </TouchableOpacity>
                            <Text style={styles.frase}>Se a educação sozinha não transforma a sociedade, sem ela tampouco a sociedade muda.</Text>
                            <Text style={styles.autor}>Paulo Freire</Text>
                        </View>

                        <View style={styles.lista}>
                            <TouchableOpacity style={styles.guide}>
                                <Text style={styles.listAll}>All</Text>
                                <View><Text style={styles.data}>40</Text></View>
                            </TouchableOpacity>
                            
                            <View style={styles.line}/>

                            <TouchableOpacity style={styles.guide}>
                                <Text style={styles.list}>Personal</Text>
                                <View style={styles.recOne}><Text style={styles.dado}>11</Text></View>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.guide}>
                                <Text style={styles.list}>Professional</Text>
                                <View style={styles.recTwo}><Text style={styles.dado}>8</Text></View>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.guide}>
                                <Text style={styles.list}>Academic</Text>
                                <View style={styles.recThree}><Text style={styles.dado}>5</Text></View>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.guide}>
                                <Text style={styles.list}>Social</Text>
                                <View style={styles.recFour}><Text style={styles.dado}>16</Text></View>
                            </TouchableOpacity>

                            <View style={styles.line}/>

                            <TouchableOpacity style={styles.guide}>
                                <Text style={styles.list}>Completed</Text>
                                <View><Text style={styles.data}>0</Text></View>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.guide}>
                                <Text style={styles.list}>Deleted</Text>
                                <View><Text style={styles.data}>0</Text></View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </SafeAreaView>
            </Modal>
            <View style={styles.icons}>
                <TouchableOpacity onPress={()=>{alert('Você clicou no botão!')}}>
                        <Image source={bell} style={styles.bell}/> 
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>setModalVisible(true)}>
                        <Image source={menu} style={styles.menu}/> 
                </TouchableOpacity>
            </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:{
        width:'100%',
        height: 66,
        flexDirection: 'row',
        justifyContent:"space-between",
        borderRadius: 12,
    },
    modal:{
        flex: 1,
        alignItems:'flex-end',
    },
    sidebar:{
        width: '60%',
        minHeight: '100%',
        backgroundColor:'#fff',
        marginRight: 2,
        borderRadius: 15,
        elevation: 5
    },
    topo:{
        width:'100%',
        height: '24%',
        display:'flex',
        borderRadius: 15,
        backgroundColor:"#7360F5",
        flexDirection:'column',
    },
    exit:{
        width: 50,
        height: 50,
        marginTop: 22,
        marginBottom: 10,
        marginHorizontal: 20,
        alignSelf:'flex-end',
    },
    frase:{
        width: '88%',
        fontSize: 14,
        alignSelf:'center',
        alignContent:'center',
        color:'#fff'
    },
    autor:{
        fontSize: 14,
        alignSelf:'flex-end',
        marginRight: 15,
        color:'#fff'
    },
    lista:{
        marginTop: 20,
        width:'100%',
        justifyContent:'center',

    },
    listAll:{
        fontSize: 20,
        marginHorizontal: 20,
        marginBottom: 10

    },
    list:{
        fontSize: 20,
        marginHorizontal: 20,
        marginBottom: 20
    },
    guide:{
        flexDirection:'row',
        justifyContent:'space-between',
    },
    recOne:{
        width:40,
        height:20,
        backgroundColor: "#FF8657",
        opacity: 0.5,
        marginHorizontal: 20,
        alignItems: 'center',
        justifyContent:'center',
        borderRadius: 5
    },
    recTwo:{
        width:40,
        height:20,
        backgroundColor: "#318CE7",
        opacity: 0.5,
        marginHorizontal: 20,
        alignItems: 'center',
        justifyContent:'center',
        borderRadius: 5
    },
    recThree:{
        width:40,
        height:20,
        backgroundColor: "#D2D3D5",

        marginHorizontal: 20,
        alignItems: 'center',
        justifyContent:'center',
        borderRadius: 5
    },
    recFour:{
        width:40,
        height:20,
        backgroundColor: "#FBD474",
        opacity: 0.5,
        marginHorizontal: 20,
        alignItems: 'center',
        justifyContent:'center',
        borderRadius: 5
    },
    dado:{
        fontSize: 12,
        color: "#000",
        opacity: 0.6,
    },
    data:{
        fontSize: 12,
        color: "#000",
        opacity: 0.6,
        marginHorizontal: 35
    },
    line:{
        alignSelf: 'center',
        width: '80%', 
        height: 1, // Altura da linha
        backgroundColor: '#7360F5', // Cor da linha  
        marginBottom: 20

    },
    text:{
        alignItems: 'center',
        justifyContent: 'center',
    },
    icons:{
        flexDirection: 'row',
        height: 66,
        alignItems:'center',
        gap: 30,
        marginHorizontal: 35
    },
    menu:{
        width: 50,
        height: 50,
    },
    bell:{
        width: 26,
        height: 30
    },
    title:{
        fontSize: 25,
        fontWeight:'bold',
        marginHorizontal: 35
    },
    well:{
        fontSize: 15,
        marginHorizontal: 35
    }
}
)