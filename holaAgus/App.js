import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, View, Button, Image, ImageBackground, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import {Video} from 'expo-av';
import { useState } from 'react';

export default function App() {
  const saludo =() =>{
   Alert.alert('Hola en botón')
  }

  [userName, setUserName] =useState('');
  
  return (
    
    <ImageBackground source={require('./assets/favicon.png')} style={styles.container}>
      <ScrollView>
        <View style={{backgroundColor:'black'}}>
          <View style={styles.header}>
            <View style={styles.headerLeft}>
              <Image source={require('./assets/icon.png')} style={styles.logo}></Image>
            </View>
            <View style={styles.headerRight}>
              <Button title='Login' onPress={saludo} />
            </View>
          </View>
          <View style={styles.body}>
            <TouchableOpacity>
              <Text style={styles.text}>Bienvenido {userName}!</Text>
              <TextInput placeholder='Nombre de ususario' placeholderTextColor="white"
                onChangeText={(userName) => setUserName( userName)}
                maxLength={8} style={{ borderWidth: 1, borderColor: 'white', padding: 5, marginTop: 5, color:'white' }}>
              </TextInput>
              </TouchableOpacity>
              <Video
                source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
                rate={1.0}
                volume={1.0}
                isMuted={false}
                resizeMode="cover"
                shouldPlay
                isLooping
                useNativeControls
                style={{ width: 300, height: 200 }}
              />
            
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
      </ScrollView>
    </ImageBackground>
  );

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '10',
    flexDirection: 'column'
  },
  body: {
    flex: 1
  },
  footer: {
    flexDirection: 'row',
    paddingBottom: '100',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff'
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    padding: '50'
  },
  headerLeft: {
    alignItems: 'center',
    flex: 1
  },
  headerRight: {
    alignItems: 'center',
    flex: 1
  },
  footerCenter: {
    alignItems: 'center',
    flex: 1
  },

  logo: {
    width: 100,
    height: 100,
    borderRadius: 50,
  }

});
