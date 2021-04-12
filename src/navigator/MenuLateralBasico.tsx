import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StackNavigator } from './StackNavigator';
import { SettingsScreen } from '../screens/SettingsScreen';
import { useWindowDimensions } from 'react-native';

const Drawer = createDrawerNavigator();

export const MenuLateralBasico = () => {


    const { width } = useWindowDimensions();
    
    return (
        <Drawer.Navigator drawerPosition="right" drawerType={ width > 720 ? 'permanent' : 'front' }>
            <Drawer.Screen name="StackNavigator" options={{ title:'Home' }} component={ StackNavigator } />
            <Drawer.Screen name="SettingsScreen" options={{ title:'Settindgs' }} component={ SettingsScreen } />
        </Drawer.Navigator>
    )
}
