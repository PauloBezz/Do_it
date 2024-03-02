import { StyleSheet } from "react-native";

export const  styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EDEDED',
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: '100%',
        bottom: 20
    },
    circles:{
        display:'flex',
        flexDirection: 'row',
        top: 130,
        gap: 12
    },
    circleOne:{
        backgroundColor: '#7E7E7E',
        borderRadius: 7.5,
        width: 10,
        height: 10,

    },
    circleTwo: {
        backgroundColor: '#7E7E7E',
        borderRadius: 7.5,
        width: 10,
        height: 10,
    },
    circleThree:{
        backgroundColor: '#5c5c5c',
        borderRadius: 7.5,
        width: 13,
        height: 13,
        bottom: 2
    },
    text: {
        fontSize: 24,

    },
    input: {
        backgroundColor:'#15487E',
        width: 250,
        height: 40,
        borderRadius: 10,
        fontSize: 20,
        color: '#fff',
        paddingLeft: 16,
        opacity: .8,
        bottom: -15
    },
    inputSecond:{
        backgroundColor:'#15487E',
        width: 250,
        height: 40,
        borderRadius: 10,
        fontSize: 20,
        color: '#fff',
        paddingLeft: 16,
        opacity: .8,
        top: 28,
    },
    buttonText:{
        color: '#FFF',
        fontSize: 17,
        fontWeight:'bold'
    },

    button:{
        width: 110,
        height: 38,
        borderRadius: 10,
        backgroundColor:'#1C2F8D',
        opacity: .9,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        top: 145,
        left: 110
    }
});