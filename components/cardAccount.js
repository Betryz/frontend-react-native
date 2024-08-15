import { View, Image, StyleSheet, Text } from "react-native-web";


export default function CardAccount() {

    return (



        <View style={styles.card}>

            <Image style={styles.img}
                source={require('../assets/favicon.png')} />

            <View style={styles.info}>
                <Text style={styles.gmail} >Gmail</Text>
                <Text style={styles.email}>beatryz@gmail.com</Text>

            </View>

        </View>

    )
}

const styles = StyleSheet.create({
    card: {
        height: 60,
        alignItems: 'center',
        gap:10,
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
    }

})