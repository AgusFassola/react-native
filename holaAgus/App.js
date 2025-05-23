import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, View, Button, Image } from 'react-native';
 
export default function App() {
   /* saludo = ()=>{
    Alert.alert('Hola en botón')
  } */
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Image source={require('./assets/icon.png')} style={styles.logo}></Image>
        </View>
        <View style={styles.headerRight}>
          <Button title='Login' onPress={console.log('hola mundo')} />
        </View>
      </View>
      <View style={styles.body}>
        <Text style={styles.text}>Bienvenido!</Text>
      </View>
      <View style={styles.footer}>
        <View style={styles.headerLeft}>
          <Text style={styles.text}>Ciapfa</Text>
        </View>
        <View style={styles.footerCenter}><Text style={styles.text}>Hola Mundo</Text></View>
        <View style={styles.headerRight}>
          <Image source={require('./assets/icon.png')} style={styles.logo}></Image>
        </View>

      </View>
      <StatusBar style="auto" />
    </View>
  );
  
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    padding:'10',
    flexDirection:'column'
  },
  body:{
    flex:1
  },
  footer:{
    flexDirection:'row',
    paddingBottom:'100',
    alignItems: 'center',
    justifyContent: 'center',
  },  
  text:{
    color:'#fff'
  },
  header:{
    flex:1,
    flexDirection:'row',
    padding:'50'
  },
  headerLeft:{
    alignItems: 'center',
    flex:1
  },
  headerRight:{
    alignItems: 'center',
    flex:1
  }, 
  footerCenter:{
    alignItems: 'center',
    flex:1
  }, 
  
  logo:{
    width:100,
    height:100,
    borderRadius:50,
  }

});
