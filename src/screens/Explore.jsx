import React from 'react'
import { View, ScrollView, Text, StyleSheet, ImageBackground } from 'react-native'
import CategoriesHeader from '../components/CategoriesHeader'
import Card from '../components/Card'
import Categories from '../components/Categories'
import BG from '../assets/Images/phar.jpeg'

const Explore = () => {
  return (
    <View style={styles.explore}>
      <ScrollView>
        <View style={styles.exploreHead}>
          <View style={styles.exploreHeadContent}>
            <Text>Category</Text>
            <Text>Grocery Run Needed?</Text>
            <Text>Pick Up essentials from your favourite store</Text>
            <View></View>
          </View>
          {/* <ImageBackground source={BG} /> */}
        </View>
        <View style={styles.exploreBody}>
          <View style={styles.exploreBodyA}>
            <View style={styles.exploreBodyAContext}>
              <CategoriesHeader />
              <ScrollView horizontal={true}>
                <Categories text='Pets' />
                <Categories text='Pharmacy' />
                <Categories text='Resturants' />
                <Categories text='Health' />
                <Categories text='Home' />
                <Categories text='Electronics' />
                <Categories text='Power' />
              </ScrollView>
            </View>
            <View style={styles.exploreBodyAContext}>
              <CategoriesHeader />
              <ScrollView horizontal={true}>
                <Categories text='Pets' />
                <Categories text='Pharmacy' />
                <Categories text='Resturants' />
                <Categories text='Health' />
                <Categories text='Home' />
                <Categories text='Electronics' />
                <Categories text='Power' />
              </ScrollView>
            </View>
            <View style={styles.exploreBodyAContext}>
              <CategoriesHeader />
              <ScrollView horizontal={true}>
                <Categories text='Pets' />
                <Categories text='Pharmacy' />
                <Categories text='Resturants' />
                <Categories text='Health' />
                <Categories text='Home' />
                <Categories text='Electronics' />
                <Categories text='Power' />
              </ScrollView>
            </View>
          </View>
          <View style={styles.exploreBodyB}>
            <View style={styles.exploreBodyB}>
              <Text style={{color:'black'}}>New to KankiBot?</Text>
              <Card />
            </View>
            <View style={styles.exploreBodyB}>
              <Text style={{color:'black'}}>Pocket Friendly</Text>
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
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  exploreHead: {
    height: 180,
    backgroundColor: 'black'
  },
  exploreHeadContent: {
    alignItems: 'flex-start',
    color: 'black'
  },
  exploreBody: {
    width: '100%',
    marginVertical: 40,
    padding: 5,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'black'
  },
  exploreBodyA: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  exploreBodyAContext: {
    flexDirection: 'column',
    height: 155,
  },
  exploreBodyB: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  exploreBodyBCard: {
    display: 'flex',
  }
})