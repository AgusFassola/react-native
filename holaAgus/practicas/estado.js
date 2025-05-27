import React, { Component } from 'react'
import { Text, StyleSheet, View, Button, TextInput } from 'react-native'

export default class estado extends Component {
  
  constructor(props){
    super(props);
    this.state={
        saludo:'Hola mundo',
        user:'111',
        userName:''
    }
  }
  
  sumarUsuario=()=>{
    this.setState({
        user:this.state.user +1
    })
  }

    render() {

       let {saludo} = this.state
       let {user} = this.state
       let {userName} = this.state

    return (
      <View>
        <Text> {saludo} Usuario: {user} </Text>
        <Button onPress={this.sumarUsuario}></Button>
        <input>Nombre de usuario: {userName}</input>
        <TextInput placeholder='Usuario:' 
        onChangeText={(userName) => this.setState({ userName })}></TextInput>
      </View>
    )
  }
}

const styles = StyleSheet.create({})
