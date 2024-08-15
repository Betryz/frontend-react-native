import { StyleSheet, View, Text } from "react-native"
import { Image } from "react-native-web"
import { CgMenu } from "react-icons/cg";


export default function Header() {
    return (
        <View style={styles.header}>

            <View style={styles.user}>
                <Image style={styles.avatar} source="https://i0.statig.com.br/bancodeimagens/64/ly/sp/64lyspe2znty2fc9ndipq80w0.jpg" />

                <Text style={styles.texto}>Beatryz Freitas</Text>

            </View>

            <CgMenu  style={styles.menu} />


            



        </View>

    )
}

const styles = StyleSheet.create({
    header: {
        flex: 1,
    
        justifyContent: 'center',
        alignItems: 'center',
        justifyContent:'space-between',
        paddingHorizontal: 15,
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
        padding: 10,
      color: 'white'


    }
})