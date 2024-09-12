import { View, Text, Pressable } from "react-native-web";
import { Image } from "expo-image";
import Ionicons from '@expo/vector-icons/Ionicons';

export default function CardAccount2({ id, userName, service, imgUrl, setAccounts, accounts }) {


    const handlerDelete = async () => {

        const response = await fetch(`http://localhost:3000/account/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        }
        )
        if (response.ok) {
            const data = await response.json();
            console.log(data)
            const newAccounts = accounts.filter((item) => item.id !== id)
            setAccounts(newAccounts)
            return
        }
        console.log('Erro ao carregar accounts')
        return
    }




    return (


        <View style={styles.card}>


            < View style={styles.tabelas}>



                <View style={styles.barra}>
                    <Text style={styles.user} >{userName}</Text>

                    <Pressable onPress={handlerDelete}>

                        <Ionicons name="trash-bin" size={24} color="white" />

                    </Pressable>

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
        borderRadius: 10,
    
        borderColor: 'black',
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
        marginLeft: 110,
        paddingVertical: 10
     
    },
    user: {
        alignItens: 'center',
        display: 'flex',
        fontSize: 18,
        fontWeight: 400, 
        color: '#fff'
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
        backgroundColor: '#013220',

        height: 30,
       
        borderRadius: 5,
        borderTop: 10,
      
        paddingLeft: 10

    }

}