import React, { Component } from 'react'
import { Text, View, FlatList } from 'react-native'

export class FlatList extends Component {
    constructor(props){
        super(props);
        misPeliculas : [
            {name: 'el Conjuro', key:'0'},
            {name: 'el Conjuro 2', key:'1'},
            {name: 'Madagascar', key:'2'}

        ]
    }
  render() {
    return (
      <View>
        <Text> textInComponent </Text>
      </View>
    )
  }
}

export default FlatList;
