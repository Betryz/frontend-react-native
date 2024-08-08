import { View, Text, StyleSheet } from "react-native"

export default function Content(){

    return (
        <View style={styles.content}>

        <Text style={styles.texto}>Content</Text>

      </View>


    )

}

const styles = StyleSheet.create({
    content: {
        flex: 10,
        backgroundColor: 'white',
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