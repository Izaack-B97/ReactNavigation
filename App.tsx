import 'react-native-gesture-handler'

import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
// import { MenuLateralBasico, MenuLateral } from './src/navigator/MenuLateralBasico';
// import { StackNavigator } from './src/navigator/StackNavigator';
import { MenuLateral } from './src/navigator/MenuLateral';
// import { Tabs } from './src/navigator/Tabs';



const App = () => {
  return (
    <NavigationContainer>
      {/* <StackNavigator /> */}
      {/* <MenuLateralBasico /> */}
      <MenuLateral />
      {/* <Tabs /> */}
    </NavigationContainer>
  )
}

export default App;
