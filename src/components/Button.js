import { Pressable, StyleSheet, Text } from "react-native"

export default function Button({onPress, children}){


    return (
        <Pressable style={styles.button} onPress={onPress}>
        <Text style={styles.butao}>
          {children}
        </Text>
      </Pressable>
    )
    

}



const styles = StyleSheet.create({
  

    button: ({ pressed }) => [{
      backgroundColor: pressed ? '#014520' : '#013220',
      alignItems: 'center',
      marginVertical: 10,
      borderRadius: 5,
      paddingVertical: 5,
      paddingHorizontal: 20
  
  
    }], butao: {
      color: '#fff'
    }
  })