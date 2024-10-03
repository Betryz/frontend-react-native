import { View, StyleSheet, Text } from "react-native";
import {Image} from "expo-image"

export default function Content() {

    return (

        <View style={styles.card}>

            <Image style={styles.img} source={imgUrl} />


            <View style={styles.info}>
                <Text style={styles.gmail} >{service}</Text>
                <Text style={styles.email}>{userName}</Text>

            </View>

        </View>

    )
}

const styles = StyleSheet.create({
    card: {
        height: 60,
        alignItems: 'center',
        gap: 10,
        flexDirection: 'row',
        borderRadius: 10,
        margin: 10,
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#eeeee2',
    },
    info: {
        padding: 10,

    },
    gmail: {
        borderBottomWidth: 1,
        borderColor: '#eeeee2',
        fontWeight: 600

    },
    email: {
        fontWeight: 100
    },
    img: {
        height: 50,
        width: 50,
    }
   


})