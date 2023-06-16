import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function CategoriesHeader() {
  return (
    <View style={styles.catHeader}>
      <Text style={styles.catText}>Browse Store Categories</Text>
      <Text style={styles.seeAll}>See all</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  catHeader: {
    display: 'flex',
    alignItems:'center',
    justifyContent:'space-between',
  },
  catText: {
    fontSize:18,
    fontWeight:'bold',
    color:'black'
  },
  seeAll: {
    padding:5,
    backgroundColor:'lightgreen',
    color:'green',
    fontSize:14
  }
})