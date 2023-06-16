import React from 'react'
import { View, ScrollView, Text, StyleSheet, ImageBackground, FlatList } from 'react-native'
import CategoriesHeader from '../components/CategoriesHeader'
import Card from '../components/Card'
import Categories from '../components/Categories'
import BG from '../assets/Images/phar.jpeg'

const Explore = () => {
  return (
    <View>
    <ScrollView 
    style={styles.exploreScroll}
    contentContainerStyle={styles.explore}
    nestedScrollEnabled={true}
    >
      <View style={styles.exploreHead}>
        <View style={styles.exploreHeadContent}>
          <Text>Category</Text>
          <Text>Grocery Run Needed?</Text>
          <Text>Pick Up essentials from your favourite store</Text>
          <View></View>
        </View>
        <ImageBackground source={BG} />
      </View>
      <View style={styles.exploreBody}>
        <View style={styles.exploreBodyA}>
          <View>
            <CategoriesHeader />
            <ScrollView horizontal={true}>
              <Categories />
              <Categories />
              <Categories />
              <Categories />
              <Categories />
              <Categories />
              <Categories />
              <Categories />
            </ScrollView>
          </View>
          <View>
            <CategoriesHeader />
            <ScrollView horizontal={true}>
              <Categories />
              <Categories />
              <Categories />
              <Categories />
              <Categories />
              <Categories />
              <Categories />
              <Categories />
            </ScrollView>
          </View>
          <View style={styles.exploreBodyBCard}>
            <CategoriesHeader />
            <ScrollView horizontal={true}>
              <Categories />
              <Categories />
              <Categories />
              <Categories />
              <Categories />
              <Categories />
              <Categories />
              <Categories />
            </ScrollView>
          </View>
        </View>
        <View style={styles.exploreBodyB}>
          <View>
            <Text>New to KankiBot?</Text>
            <Card />
          </View>
          <View>
            <Text>Pocket Friendly</Text>
            <Card />
          </View>
        </View>
      </View>
    </ScrollView>
    </View>
  )
}

export default Explore


const styles = StyleSheet.create({
  explore: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%'
  },
  exploreScroll:{
    height:'100%',
    width:"100%"
  },
  exploreHead: {
    height: 180,
    width: '100%',
    backgroundColor:'black'
  },
  exploreHeadContent: {
    width: '100%',
    height: '100%',
    alignItems: 'flex-start',
    color:'black'
  },
  exploreBody: {
    padding: .5,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    color:'black'
  },
  exploreBodyA: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%'
  },
  exploreBodyB: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%'
  },
  exploreBodyBCard:{
    display:'flex',
  }
})