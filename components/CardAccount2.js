import { View, Text } from "react-native-web";
import { Image } from "expo-image";
import AntDesign from '@expo/vector-icons/AntDesign';

export default function CardAccount2({ userName, service, imgUrl }) {


    return (


        <View style={styles.card}>


            < View style={styles.tabelas}>



                <View style={styles.barra}>
                    <Text style={styles.user} >{userName}</Text>
                    <AntDesign name="rightcircle" style={styles.icon} size={24} color="gray" />

                </View>


                <Text style={styles.titulo}> {service} </Text>
                <Image style={styles.img} source={imgUrl} />




            </View>

        </View>
    )



}

const styles = {

    card: {

        display: 'flex',
        flexDirection: "row",
        justifyContent: 'center',
        alignItens: 'center',
       

    },
    tabelas: {
        marginTop: 50,
        borderWidth: 1,
        borderRadius: 15,
        borderColor: '#eeeee2',
        width: 300,
        display: 'flex',
        justifyContent: 'center',
        alignItens: 'center'

    },
    titulo: {
        fontSize: 20,
        display: 'flex',
        justifyContent: 'center',
        fontWeight: 500

    },
    img: {
        height: 80,
        width: 80,
        marginLeft: 110
    },
    user: {
        alignItens: 'center',
        display: 'flex',
        fontSize: 18,
        fontWeight: 200
      

    },
    icon: {
        padding: 2

    },
    barra: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderWidth: 1,
        alignItens: 'center',
        paddingHorizontal: 10,
        paddingHorizontal: 10,


        height:30,
        borderTop: 2,
        borderRadius: 7,
        borderColor: '#eeeee2',
        paddingLeft: 10

    }

}