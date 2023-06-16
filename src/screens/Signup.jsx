import React from 'react'
import { View, Text, TextInput, Button, TouchableOpacity } from 'react-native'


const Signup = ({ navigation }) => {
  return (
    <View>
      <View>
        <Text>Lets's Get You Onboard</Text>
        <Text>Welcome,</Text>
        <Text>Register and Place an Order</Text>
        <View>
          <TextInput placeholder='Full Name' />
          <TextInput placeholder='Phone Number' />
          <TextInput placeholder='Email' />
          <TextInput placeholder='Password' />
        </View>
        <TouchableOpacity onPress={()=> navigation.replace('BottomNav')}>
          <Text>
          Sign Up
          </Text>
        </TouchableOpacity>
        <Button title='Sign Up' onPress={()=> navigation.replace('BottomNav')} />
        <View>
          <Text>Alrealy Have An Account? </Text>
          <Text>Sign In</Text>
        </View>
      </View>
    </View>
  )
}

export default Signup