import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Card = () => {
  return (
    <View style={styles.card}>
      <Text style={{color:'black'}}>Card</Text>
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
  card:{
    width:'100%',
    borderRadius:10,
  },
  cardImg:{
    flex:2,
  },
  cardText:{
    flex:1,
  }
})