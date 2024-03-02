import { Text, View ,Image, Button} from "react-native";
import { styles } from "./style"
import image from '../../svg/montain.png'

export function First() {
    return (
        <View style={styles.container}>
            <Text style={styles.nameApp}>Do It</Text>
            <Image source={image} />
            <View style= {styles.circles}>
                <View style= {styles.circle1}/>
                <View style= {styles.circle2}/>
                <View style= {styles.circle3}/>
                <Button title="Avançar" onPress= {() => navigation.navigate('Second')}  />
            </View>
        </View>
    )
}