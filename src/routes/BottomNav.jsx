import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Explore from '../screens/Explore';
import Resturants from '../screens/Resturants';
import Search from '../screens/Search';
import Orders from '../screens/Orders';
import Account from '../screens/Account';

const Tabs = createMaterialBottomTabNavigator();
const BottomNav = () => {
  return (
    <Tabs.Navigator initialRouteName='Explore' barStyle={{
        backgroundColor:'grey'
    }} activeColor='green'>
        <Tabs.Screen 
            name='Explore' component={Explore}/>
        <Tabs.Screen
            name='Resturants' component={Resturants}/>
        <Tabs.Screen
            name='Search' component={Search}/>
        <Tabs.Screen
            name='Orders' component={Orders}/>
        <Tabs.Screen
            name='Account' component={Account}/>
    </Tabs.Navigator>
  )
}

export default BottomNav