import { StyleSheet, View, Text } from "react-native"

export default function Footer() {

    return (

        <View style={styles.footer}>

            <Text style={styles.texto}>Footer</Text>

        </View>
    )
}

const styles = StyleSheet.create({
    footer:{
        flex: 2,
        backgroundColor:'#013220',
        justifyContent: 'center'
    
      },
      texto: {
        display: 'flex',
        color:'green',
        justifyContent: 'center',
        fontWeight: 'bold',
        fontSize: 20
        
        
      }
})

