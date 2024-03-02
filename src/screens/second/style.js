import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#BC6DF3',
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: '100%',
        top: 50
    },
    circles:{
        display:'flex',
        flexDirection: 'row',
        top: 140,
        gap: 12
    },
    circleOne:{
        backgroundColor: '#fff',
        borderRadius: 7.5,
        width: 10,
        height: 10,

    },
    circleTwo:{
        backgroundColor: '#5c5c5c',
        borderRadius: 7.5,
        width: 13,
        height: 13,
        bottom: 2
    },

    circleThree: {
        backgroundColor: '#fff',
        borderRadius: 7.5,
        width: 10,
        height: 10,
    },
    text: {
        width: 295,
        height: 63,
        fontSize: 20,
        color: '#fff',
        display:'flex',
        flexDirection: 'row',
        top:70,
        textAlignVertical:'center'
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
        top: 157,
        left: 110
    }
});