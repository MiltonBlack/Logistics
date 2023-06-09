import React from "react";
import { NavigationContainer } from '@react-navigation/native'
import StackNav from "./src/routes/StackNav";
import { SafeAreaView } from "react-native";

export default function App() {

  return (

    <NavigationContainer>
      <StackNav />
    </NavigationContainer>

  );
}

