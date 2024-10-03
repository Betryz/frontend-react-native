import { StyleSheet, View, Text } from "react-native"


export default function Footer() {

    return (

        <View style={styles.footer}>
            

            <Text style={styles.texto}>Copyright © 2024 Renan Cavichi</Text>

        </View>
    )
}

const styles = StyleSheet.create({
    footer:{
        padding: 15,
        backgroundColor:'#013220',
        justifyContent: 'center',
        alignItems:'center'
    
      },
      texto: {
        display: 'flex',
        color:'white',
        justifyContent: 'center',
       
 
        
        
      }
})

