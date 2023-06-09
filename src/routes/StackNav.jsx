import React from 'react'
import { View, Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import BottomNav from './BottomNav'
import AuthStack from '../utils/AuthStack';
import Login from '../screens/Login';
import Signup from '../screens/Signup';


function Splash({ navigation }) {
  setTimeout(() => {
    // condition if logged in or account alrealy exist, should navigate to bottom nav else authstack
    navigation.replace('BottomNav')
  }, 2000);
  return (
    <View>
      <Text>
        logistics splash screen
      </Text>
    </View>
  )
}

const StackNav = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name='Splash' component={Splash} />
      <Stack.Screen name='BottomNav' component={BottomNav} />
      <Stack.Screen name='Login' component={Login} />
      <Stack.Screen name='Signup' component={Signup} />
    </Stack.Navigator>
  )
}

export default StackNav