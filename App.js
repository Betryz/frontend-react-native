
import { StyleSheet, ScrollView } from 'react-native';
import Content from './components/Content';
import Footer from './components/Footer';
import Header from './components/Header';





export default function App() {
  return (

    <ScrollView style={styles.container}>

      <Header /> 

   

      <Content />

      



      <Footer />

    </ScrollView>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }

});
