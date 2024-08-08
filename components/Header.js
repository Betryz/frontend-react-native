import { StyleSheet, View, Text } from "react-native"

export default function Header() {
    return (
        <View style={styles.header}>

            <Text style={styles.texto}>Header</Text>

        </View>

    )
}

const styles = StyleSheet.create({
    header: {
        flex: 1,
        backgroundColor: 'black',
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