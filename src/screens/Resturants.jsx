import React from 'react'
import { View, ScrollView } from 'react-native'
import Card from '../components/Card'

const Resturants = () => {
  return (
    <View>
      <ScrollView>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </ScrollView>
    </View>
  )
}

export default Resturants