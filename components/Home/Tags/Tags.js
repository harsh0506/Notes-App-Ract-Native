import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Renderer from './Renderer'
import { height, width } from '../../helpers/Dimmention'

const Tags = () => {
  return (
    <View style={styles.Main}>
     <Renderer data={data} />
    </View>
  )
}

export default Tags

const data = [
  {
    id:1,
    addTag : "code"
  },
  {
    id:2,
    addTag : "school"
  },
  {
    id:3,
    addTag : "office"
  },
  {
    id:4,
    addTag : "art"
  },
]

const styles = StyleSheet.create({
Main:{
  width,
  height:height/7,
  alignItems:"center",
  justifyContent:"center"
}
})