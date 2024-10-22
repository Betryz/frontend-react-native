
import { ScrollView, StyleSheet, View, Text, ActivityIndicator } from 'react-native'
import Footer from '../components/Footer';
import { useEffect } from 'react';
import { useRouter } from 'expo-router';





export default function Init() {

const router = useRouter()

useEffect(() => {
    setTimeout(() => router.replace('/login'), 3000)
}, [])

    return (

        <ScrollView style={styles.container}>
            <View style={{flex: 1, marginTop: 100, justifyContent: 'center',
        alignItems: 'center' }}>

                <Text style={{ fontsize: 50 }}>MyPass</Text>
                <Text style={{ fontsize: 50 }}>Organize suas contas com MyPass</Text>


                <ActivityIndicator style={{marginVertical: 30}} />

                <Footer />

            </View>


        </ScrollView>


    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
       
    }

});
