import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function CategoriesHeader() {
  return (
    <View style={styles.catHeader}>
      <View>
        <Text style={styles.catText}>Browse Store Categories</Text>
      </View>
      <View>
        <Text style={styles.seeAll}>See all</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  catHeader: {
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  catText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black'
  },
  seeAll: {
    padding: 4,
    backgroundColor: 'lightgreen',
    color: 'green',
    fontSize: 14,
    borderRadius: 5
  }
})