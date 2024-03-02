import { Text, View ,Image, TouchableOpacity} from "react-native";
import { styles } from "./style.js"
import image from '../../svg/ilustration.png'

export function Second(){
    return(
        <View style={styles.container}> 
            <Image style={styles.image} source={image} />
            <Text style={styles.text}>Evite atrasos e esquecer compromissos?Aqui você anota tudo e te lembramos! Faça parte deste time de campeões. </Text>
            
            <View style= {styles.circles}>
                <View style= {styles.circleOne}/>
                <View style= {styles.circleTwo}/>
                <View style= {styles.circleThree}/>
            </View>
            <TouchableOpacity style= {styles.button} onPress={() => alert('Botão Pressionado')}> 
                <Text style={styles.buttonText}>Avançar</Text>
            </TouchableOpacity>

        </View>
    )
}