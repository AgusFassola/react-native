import React, { Component } from 'react'
import { Text, StyleSheet, View,Image, TouchableOpacity, TextInput } from 'react-native'
import { useState } from 'react';
//import { Video } from 'expo-av';


export default class Body extends Component {
  render() {
    
    
      [userName, setUserName] = useState('');
    return (
      <View style={styles.bodyForm}>
                  <View style={styles.box}>
                    <Text style={styles.text}>Bienvenido {userName}!</Text>
                    <TouchableOpacity>
                      <TextInput placeholder='Nombre de ususario' placeholderTextColor="black"
                        onChangeText={(userName) => setUserName(userName)}
                        maxLength={8} style={{ borderWidth: 1, borderColor: 'white', padding: 5, marginTop: 5, color: 'white' }}>
                      </TextInput>
                    </TouchableOpacity>
                  </View>
      
                  <View style={styles.box}>
                    <Text style={styles.text}>Correo Electrónico:</Text>
                    <TouchableOpacity>
                      <TextInput placeholder='Ingrese su correo' placeholderTextColor="black"
                        maxLength={8} style={{ borderWidth: 1, borderColor: 'white', padding: 5, marginTop: 5, color: 'white' }}>
                      </TextInput>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.box}>
                    <Text style={styles.text}>Provincia:</Text>
                    <TouchableOpacity>
                      <TextInput placeholder='Ingrese provincia' placeholderTextColor="black"
                        maxLength={8} style={{ borderWidth: 1, borderColor: 'white', padding: 5, marginTop: 5, color: 'white' }}>
                      </TextInput>
                    </TouchableOpacity>
                  </View>
                  {/* <Video
                    source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
                    rate={1.0}
                    volume={1.0}
                    isMuted={false}
                    resizeMode="cover"
                    shouldPlay
                    isLooping
                    useNativeControls
                    style={{ width: 300, height: 200 }}
                  /> */}
                  <View>
                    <Image source={require('./assets/rectangulo.webp')} style={styles.rectangulo}></Image>
                  </View>
                </View>
    )
  }
}

const styles = StyleSheet.create({
     text: {
    color: '#000'
  },box:{
    padding:15,
    marginHorizontal:50
  },
  body:{
    flex: 1,

  },
  bodyForm: {
    flex: 1,
    marginVertical:30
  },
})
