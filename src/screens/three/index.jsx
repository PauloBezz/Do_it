import { TextInput, Text, View, Image, TouchableOpacity} from "react-native";
import { styles } from "./style";
import image from '../../svg/calendar.png'
import { useState } from "react";
import Loading from '../../../components/Loading';

export function Three() {
  const [visible, setVisible] = useState(false);

    function Logar(){
        setVisible(true);
        setTimeout(() => {
            setVisible(false);
            console.log('Entrando na home')
        },3000)
    }

    return(
        <View style={styles.container}>
            <Image style={styles.image} source={image}/>
            <Text  style={styles.text}>
                Então, qual é o seu nome?
            </Text>
            <TextInput style={styles.input} placeholder="Primeiro Nome" placeholderTextColor='#fff' 
            />
            <TextInput style={styles.inputSecond} placeholder="Sobrenome" placeholderTextColor='#ffffff'/>

            <View style= {styles.circles}>
                <View style= {styles.circleOne}/>
                <View style= {styles.circleTwo}/>
                <View style= {styles.circleThree}/>
            </View>

            <Loading visible={visible}/>
            <TouchableOpacity style={styles.button} onPress={Logar}>
                <Text style={styles.buttonText}>Avançar</Text>
            </TouchableOpacity>
        </View>
    )
}