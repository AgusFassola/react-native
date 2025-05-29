import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class Footer extends Component {
  render() {
    return (
      <View style={styles.footer}>
                  <View style={styles.footerLeft}>
                    <Text style={styles.text}>BarberGo</Text>
                  </View>
                  <View style={styles.footerCenter}><Text style={styles.text}>Hola Mundo</Text></View>
                  <View style={styles.footerRight}>
                    <Text style={styles.text}>Contactanos</Text>
                  </View>
      
                </View>
    )
  }
}

const styles = StyleSheet.create({
    footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerCenter: {
    alignItems: 'center',
    flex: 1
  },
  footerLeft: {
    alignItems: 'center',
    flex: 1
  },
  footerRight: {
    alignItems: 'center',
    flex: 1
  },
  text: {
    color: '#000'
  },
})
