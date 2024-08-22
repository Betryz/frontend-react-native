import { View, Text, StyleSheet } from "react-native"
import CardAccount from "./CardAccount2"
import CardAccount2 from "./CardAccount2"





export default function Content() {
  const accounts = [
    {
      id: 1,
      service: "Gmail",
      imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/640px-GitHub_Invertocat_Logo.svg.png",
      userName: "Bibi"

    },
    {
      id: 2,
      service: "Instagram",
      imgUrl: "https://cdn-icons-png.flaticon.com/512/281/281769.png",
      userName: ""
    },
    {
      id: 3,
      service: "Github",
      imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/640px-GitHub_Invertocat_Logo.svg.png",
      userName: ""
    },
    {
      id: 4,
      service: "Instagram",
      imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/640px-GitHub_Invertocat_Logo.svg.png",
      userName: ""
    },
    {
      id: 5,
      service: "Instagram",
      imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/640px-GitHub_Invertocat_Logo.svg.png",
      userName: ""
    },
   
  ]

  return (
    <View style={styles.content}>

      <Text style={styles.favorite} >   Favoritos</Text>


      {
        accounts.map((account) => 

          <CardAccount2
          key={account.id}
            service={account.service}
            imgUrl={account.imgUrl}
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