import React, { Component } from 'react'
import { Text, View, FlatList } from 'react-native'
import Lista from './listas'

export class FlatList extends Component {
    constructor(props){
        super(props);
        misPeliculas : [
            {name: 'el Conjuro', key:'0'},
            {name: 'el Conjuro 2', key:'1'},
            {name: 'Madagascar', key:'2'}

        ]
    }

    separador =()=>{
        return(
            <View style={{
                height:5,
                width:"100%",
                backgroundColor:"black",
                marginVertical: 10
            }}></View>
        )
    }
  render() {
    return (
      <FlatList
        data={this.misPeliculas}
        renderItem={({item}) => <Lista data={item}/> }
        horizontal={false}//para ponerlo vertical
        itemSeparatorComponent={this.separador}
        listEmptyComponent={<Text style={{marginTop:30}}>No hay elementos</Text>}
      ></FlatList>
    )
  }
}

export default FlatList;
