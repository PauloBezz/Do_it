import { View, } from  'react-native';
import { styles } from './style'
import SideBar from '../../../components/SideBar'; 

export function Home(){

    return(
        <View style={styles.container}>
        <SideBar name={'Atila'}/>

        </View>
    )
}