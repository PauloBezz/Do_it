import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center'
    },
    nameApp: {
        color: '#fff',
        zIndex: 9,
        position: 'absolute',
        fontSize: 60,
        textShadowColor: 'rgba(0, 0, 0, 0.75)', // Cor da sombra
        textShadowOffset: { width: 3, height: 3 }, // Offset da sombra
        textShadowRadius: 5, // Raio da sombra
    },
    image: {
        width: '100%', // Garante que a imagem ocupa a largura total
        height: '100%', // Garante que a imagem ocupa a altura total
    },
    circles:{
        display: 'flex',
        flexDirection: 'row',
        gap: 8,
        bottom: 120
    },
    circle1:{
        backgroundColor: '#5c5c5c',
        borderRadius: 7.5,
        width: 13,
        height: 13,
        zIndex: 90,
    },
    circle2:{
        backgroundColor: '#fff',
        borderRadius: 7.5,
        width: 10,
        height: 10,
        zIndex: 90,
    },
    circle3: {
        backgroundColor: '#fff',
        borderRadius: 7.5,
        width: 10,
        height: 10,
        zIndex: 90,
    },
});