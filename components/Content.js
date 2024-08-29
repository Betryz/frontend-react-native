import { useEffect, useState } from "react"
import { View, Text, StyleSheet } from "react-native"
import CardAccount2 from "./CardAccount2"


export default function Content() {

  const [accounts, setAccounts] = useState([]);

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

      , []
  })

  return (
    <View style={styles.content}>

      <Text style={styles.favorite} >Favoritos</Text>

      { accounts.length === 0 && <Text>Loading...</Text> }

      {
        accounts.map((account) =>

          <CardAccount2
            key={account.id}
            service={account.service}
            imgUrl={account.logo_image}
            userName={account.userName}
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

  }
})