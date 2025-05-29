import React from 'react'
import { Text, View } from 'react-native'

const Listas=(props) => {
    return (
      <View style={{ marginTop: 30 }}>
        <Text> {props.data.name}</Text>
      </View>
    )
}

export default Listas
