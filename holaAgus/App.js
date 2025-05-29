import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, ScrollView } from 'react-native';
import Header from './src/components/header';
import Body from './src/components/body';
import Footer from './src/components/footer';


export default function App() {
  
  return (

    <ImageBackground source={require('./assets/fondo.png')} style={styles.body}>
      <ScrollView>
        <View style={styles.container}>
          <Header />
          <Body />
          <Footer/>
          <StatusBar style="auto" />
        </View>
      </ScrollView>
    </ImageBackground>
  );

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  text: {
    color: '#000'
  },
  

});
