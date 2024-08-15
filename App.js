
import { StyleSheet, View } from 'react-native';
import Content from './components/Content';
import Footer from './components/Footer';
import Header from './components/Header';




export default function App() {
  return (

    <View style={styles.container}>

      <Header /> 

      <Content />

      <Footer />

    </View>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }

});
