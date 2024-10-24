import {View, StyleSheet, Text, TextInput, Alert} from 'react-native'
import { useState } from "react"
import Button from '../components/Button'
import { useRouter } from 'expo-router'

export default function Signup(){



    const router = useRouter()

   
    const [txtName, setTxtName] = useState('')
    const [txtEmail, setTxtEmail] = useState('')
    const [txtPass, setTxtPass] = useState('')
    const [txtAvatar, setTxtAvatar] = useState('')

    const handleCreateAccount = async () => {
        const user = {
            email: txtEmail,
            name: txtName,
            avatar: txtAvatar,
            pass: txtPass
         
        }
    
        const response = await fetch('http://localhost:3000/auth/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(user)
        })

        if(response.ok){
            const data = await response.json()
           Alert.alert('Usuário Criado com Sucesso!')
           setTxtName('')
           setTxtEmail('')
           setTxtAvatar('')
           setTxtPass('')
           router.back()
            return
        } else {
            const data = await response.json()
            Alert.alert('Erro ao criar usuário!')
            console.log(data?.error)
        }
       
        return
    }

    return( 
        <View style={styles.container}>
          <Text>Name:</Text>
          <TextInput 
            style={styles.input}
            onChangeText={setTxtName}
            value={txtName}
          />
           <Text>Email:</Text>
          <TextInput 
            style={styles.input}
            onChangeText={setTxtEmail}
            value={txtEmail}
          />
          <Text>Password:</Text>
          <TextInput 
            style={styles.input}
            onChangeText={setTxtPass}
            value={txtPass}
            secureTextEntry={true}
          />
          <Text>Avatar:</Text>
          <TextInput 
            style={styles.input}
            onChangeText={setTxtAvatar}
            value={txtAvatar}
            keyboardType='url'
          />
        <Button onPress={handleCreateAccount}>Cadatrar</Button>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  input: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#444444',
    paddingHorizontal: 10,
    paddingVertical: 6,
    marginVertical: 5,
    borderRadius: 5
  }
})