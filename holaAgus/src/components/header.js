import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, Button, ImageBackground, Alert } from 'react-native'

export default class Header extends Component {
  render() {
    const saludo = () => {
        Alert.alert('Hola en botón')
      }
    return (
        <ImageBackground source={require('./assets/rectangulo.webp')} style={styles.headerFondo}>
                    <View style={styles.header}>
                      <View style={styles.headerLeft}>
                        <Image source={require('./assets/logo.png')} style={styles.logo}></Image>
                      </View>
                      <View style={styles.headerRight}>
                        <Button title='Login' onPress={saludo} 
                        style={{ borderColor:'white'}}/>
                      </View>
                    </View>
                  </ImageBackground>

    )
  }
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    flexDirection: 'row',
    padding: '50',
    justifyContent: 'space-between'
  },
  headerFondo: {
    paddingTop: 0,
    width: 450,
    height: 200,
  },
  headerLeft: {
    alignItems: 'center',
    flex: 0.3
  },
  headerRight: {
    alignItems: 'center',
    flex: 0.3,
  },

  rectangulo: {
    marginTop:100,
    width: 500,
    height: 200,
  },
  logo: {
    width: 70,
    height: 70,
    borderRadius: 50,
  }
})
