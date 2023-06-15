import React from 'react'
import { View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import BottomNav from './BottomNav'

type StackParam = {
  Splash: undefined;
  BottomNav: undefined;
}

type Props = NativeStackScreenProps<StackParam, 'Splash','BottomNav'>;

function Splash({navigation}:Props) {
    setTimeout(()=> {
        navigation.replace('BottomNav');
    })
    return(
        <View>
            logistics splash screen
        </View>
    )
}

const StackNav = () => {
    const Stack = createNativeStackNavigator<StackParam>();
  return (
    <Stack.Navigator>
        <Stack.Screen name='Splash' component={Splash}/>
        <Stack.Screen name='BottomNav' component={BottomNav}/>
    </Stack.Navigator>
  )
}

export default StackNav