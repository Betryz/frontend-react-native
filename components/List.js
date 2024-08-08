import {  StyleSheet, SectionList, View, Text } from "react-native"


const List = [
    {
        list: ['Home', 'Contacts', 'Help', 'Settings']
    }
]

export default function List() {
return ( 
    <SectionList sections={List} keyExtractor={(item, index) =>
        item + index } renderItem={({item}) => (
            <View style={StyleSheet.item} >

                <Text style={StyleSheet.title} >{item}</Text>

            </View>

        )}
       
        />

    )
}

const styles = StyleSheet.create({

    item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
    },
    header: {
      fontSize: 32,
      backgroundColor: '#fff',
    },
    title: {
      fontSize: 24,
    },
  });
