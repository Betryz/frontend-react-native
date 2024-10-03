import { View, TextInput, Text, StyleSheet} from "react-native";
import Button  from "../components/Button";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { useState } from "react";

export default function Signup(){

    const {teste} = useLocalSearchParams();
    const navigation = useNavigation()

   

    const [txtServico, setTxtServico] = useState('');
    const [txtPass, setTxtPass] = useState('');
    const [txtUserName, setTxtUserName] = useState('');
    const [txtImgUrl, setTxtImgUrl] = useState('');




    const handleCreateAccount = async () => {

        const account = {
          service: txtServico,
          username: txtUserName,
          logo_image: txtImgUrl,
          pass: txtPass,
          user_id: 1
        }
    
        const response = await fetch('http://localhost:3000/account/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(account)
        })
        if (response.ok) {
          const data = await response.json();
          console.log(data)
          navigation.navigate('index' , {newAccount: data.account})
    
          return
        }
        console.log('Erro ao carregar accounts')
        return
      }

return(

    <View style={styles.container}>
        
    <Text>Serviço:</Text>
    <TextInput style={styles.input}
      onChangeText={setTxtServico}
      value={txtServico} />


    <Text>UserName:</Text>
    <TextInput style={styles.input}
      onChangeText={setTxtUserName}
      value={txtUserName} />


    <Text>Imagem:</Text>
    <TextInput style={styles.input}
      onChangeText={setTxtImgUrl}
      value={txtImgUrl} />

    <Text>Senha:</Text>
    <TextInput style={styles.input}
      onChangeText={setTxtPass}
      value={txtPass} />






  <Button onPress={handleCreateAccount} > Cadastrar</Button>

         </View>
   
)

}
const styles = StyleSheet.create({
  container:{
    padding: 20
  },
   
    input: {
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: '#444444',
      paddingHorizontal: 6,
      paddingVertical: 5,
      borderRadius: 5
  
    }
  })


