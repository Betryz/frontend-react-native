import { View, Text, StyleSheet } from "react-native"
import CardAccount from "./cardAccount"




export default function Content() {

  return (
    <View style={styles.content}>


      <Text style={styles.favorite} >   Favoritos</Text>

      <CardAccount />

      <CardAccount />

      <CardAccount />

      <CardAccount />

      <CardAccount />

      <CardAccount />

      <CardAccount />

      <CardAccount />

      <CardAccount />

     


    </View>


  )

}

const styles = StyleSheet.create({
  content: {
     padding: 15 ,
    backgroundColor: 'white',
   

  },
  texto: {
    display: 'flex',
    color: 'green',
    justifyContent: 'center',
    fontSize: 20
  },
  favorite: {
    fontSize: 20,
   
  }
})