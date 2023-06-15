import React, {JSX} from "react";
import {NavigationContainer} from '@react-navigation/native'
import StackNav from "./src/routes/StackNav";


export default function App(): JSX.Element {
  
  return (
    <NavigationContainer>
      <StackNav/>
    </NavigationContainer>
  );
}

