import { StyleSheet, View, Text, Modal, ActivityIndicator } from "react-native";
import { Logo } from "../src/svg/Logo";

export default function Loading({visible}) {
    return (
        <Modal transparent visible={visible}>
        <View style={styles.container}> 
            <Logo/>
            <ActivityIndicator 
            size={"large"}
            color={'purple'}
            animating={true}
            style={styles.load}/>
        </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#fff',
        flex: 1,
        alignItems: 'center',
        justifyContent:'center',
        gap: 20
    },
    title:{
        color: '#000',
        zIndex: 9,
        position: 'absolute',
        fontSize: 50,
        alignContent:'center',
        textShadowColor: 'rgba(0, 0, 0, 0.35)', // Cor da sombra
        textShadowOffset: { width: 3, height: 3 }, // Offset da sombra
        textShadowRadius: 5, // Raio da sombra
    },
    load:{
        alignSelf:'center',
        justifyContent: 'center',
    }
});