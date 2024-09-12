import { useEffect, useState } from "react"
import { View, Text, StyleSheet, TextInput, Pressable } from "react-native"
import CardAccount2 from "./CardAccount2"


export default function Content() {

  const [accounts, setAccounts] = useState([]);
  const [txtServico, setTxtServico] = useState('');
  const [txtPass, setTxtPass] = useState('');
  const [txtUserName, setTxtUserName] = useState('');
  const [txtImgUrl, setTxtImgUrl] = useState('');

  useEffect(() => {

    const getAccounts = async () => {
      const response = await fetch('http://localhost:3000/account/list')
      if (response.ok) {
        const data = await response.json();
        console.log(data)
        setAccounts(data.accounts)
        return
      }
      console.log('Erro ao carregar accounts')
      return
    }

    getAccounts()


  }, [])

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
      setAccounts([data.account, ...accounts])

      return
    }
    console.log('Erro ao carregar accounts')
    return
  }




  return (
    <View style={styles.content}>

      <View>
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




      </View>

      <Pressable style={styles.button} onPress={handleCreateAccount}>
        <Text style={styles.butao}>
          Cadastrar
        </Text>
      </Pressable>




      <Text style={styles.favorite} >Favoritos</Text>

      {accounts.length === 0 && <Text>Loading...</Text>}

      {
        accounts.map((account) =>

          <CardAccount2
            key={account.id}
            id={account.id}
            service={account.service}
            imgUrl={account.logo_image}
            userName={account.username}
            accounts={accounts}
            setAccounts={setAccounts}

          />

        )}

    </View>

  )

}

const styles = StyleSheet.create({
  content: {
    padding: 15,
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

  },
  input: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#444444',
    paddingHorizontal: 6,
    paddingVertical: 5,
    borderRadius: 5

  }, button: ({ pressed }) => [{
    backgroundColor: pressed ? '#014520' : '#013220',
    alignItems: 'center',
    marginVertical: 10,
    borderRadius: 5,
    paddingVertical: 5,


  }], butao: {
    color: '#fff'
  }
})