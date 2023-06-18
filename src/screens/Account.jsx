import React from 'react'
import { Text, View, StyleSheet } from 'react-native'


function Account() {
  return (
    <View>
      <Text style={styles.accountName}>Azibapu Eghoi</Text>
      <Text style={styles.accountNumber}>09037289192</Text>
      <View>
        <View>
          <Text style={styles.accountTextLinks}>Profile</Text>
        </View>
        <View>
          <Text style={styles.accountTextLinks}>Settings</Text>
        </View>
        <View>
          <Text style={styles.accountTextLinks}>About</Text>
        </View>
        <View>
          <Text style={styles.accountTextLinks}>Help</Text>
        </View>
        <View>
          <Text style={styles.accountTextLinks}>Privacy Policy</Text>
        </View>
        <View>
          <Text style={styles.accountTextLinks}>Logout</Text>
        </View>
      </View>
    </View>
  )
}

export default Account

const styles = StyleSheet.create({
  accountName:{
    fontSize:25,
    color:'black'
  },
  accountNumber:{
    fontSize:21,
    color:'black'
  },
  accountTextLinks:{
    color:'black',
    fontSize:17
  }
})