import { StyleSheet, View, Text } from "react-native"
import { Image } from "react-native-web"
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

import Button from "./Button";



export default function Header() {



    return (
        <View style={styles.header}>

            <View style={styles.user}>
                <Image style={styles.avatar} source={require('../../assets/64lyspe2znty2fc9ndipq80w0.webp')}
                //source="https://i0.statig.com.br/bancodeimagens/64/ly/sp/64lyspe2znty2fc9ndipq80w0.jpg" 
                />

                <Text style={styles.texto}>Beatryz Freitas</Text>

            </View>


            <Button onPress={() => navigation.navigate('signup', {teste: 'Olá'})}> 
            <MaterialCommunityIcons style={styles.menu} name="plus" size={24}  />
                 </Button>

            

        </View>

    )
}

const styles = StyleSheet.create({
    header: {
      
        alignItems: 'center',
        justifyContent:'space-between',
        padding: 15,
        flexDirection: 'row',
        backgroundColor: '#013220',
    

    },
    user: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    },
    texto: {
        display: 'flex',
        color: 'white',
        justifyContent: 'center',
        fontWeight: '400',
        fontSize: 20
    },

    avatar: {
        width: 50,
        height: 50,
        borderRadius: 30,
        
    },
    menu: {
        width: 25,
        height: 25,
       
      color: 'white'


    }
})