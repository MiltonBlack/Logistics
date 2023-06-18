import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Card = () => {
  return (
    <View style={styles.card}>
      <View style={styles.cardImg}>
        <Text style={styles.cardImgText}>Currently Closed</Text>
      </View>
      <Text style={styles.cardText}>Debby Gold Resturant</Text>
      <View style={{ height: 1, width: '100%', backgroundColor: 'black' }} />
      <View style={styles.cardTxtBottom}>
        <View>
          <Text style={styles.cardTxt}>NN</Text>
        </View>
        <View >
          <Text style={styles.cardTxt}>30 Mins</Text>
        </View>
      </View>
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
  card: {
    marginVertical:15,
    width: '100%',  
    shadowColor: '#000',
    borderRadius: 13,
    shadowOffset: {
      width: 10,
      height: 10
    },
    shadowOpacity: .4,
    shadowRadius: 10,
    padding:5,
    borderColor:'black',
    borderWidth:1,
  },
  cardImg: {
    flex: 2,
    height: 90,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  cardImgText: {
    textAlign: 'center',
  },
  cardText: {
    color: 'black',
    textAlign:'center',
    paddingVertical:10,
  },
  cardTxtBottom:{
    flex:1,
    flexDirection:'row',
    justifyContent:'space-between',
  },
   cardTxt:{
    color:'black'
   }
})