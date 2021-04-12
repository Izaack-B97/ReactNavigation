import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

// import { Tab3Screen } from '../screens/Tab3Screen';
// import { Tab2Screen } from '../screens/Tab2Screen';
import { Tab1Screen } from '../screens/Tab1Screen';
import { StackNavigator } from './StackNavigator';
import { colores, styles } from '../theme/appTheme';
import { Platform, Text } from 'react-native';
import { TopTapNavigator } from './TopTapNavigator';

import Icon from 'react-native-vector-icons/Ionicons';

export const Tabs = () => {
    return Platform.OS === 'ios' ? <TabsIOS /> : <TabsAndroid />; 
}

// Menu para android
const BottomTabAndroid = createMaterialBottomTabNavigator();

const TabsAndroid = () => {
    return (
        <BottomTabAndroid.Navigator
            sceneAnimationEnabled={ true }
            barStyle={{ 
                backgroundColor: colores.primary
            }}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, focused }) => { 

                    // console.log( route.name )

                    let iconName : string = '';

                    switch ( route.name ) {
                        case 'Tab1Screen':
                            iconName = 'contrast-outline';
                        break;
                        case 'TobTapNavigator':
                            iconName = 'hammer-outline';
                        break;
                        case 'StackNavigator':
                            iconName = 'apps-outline';
                        break;    
                    }

                    // console.log( iconName );

                    return (
                        <Text style={{ color: color }}>
                            <Icon name={ iconName } size={ 20 } color='white' />
                        </Text>
                    );
                }
            })}
        >
            <BottomTabAndroid.Screen name="Tab1Screen" options={{ title: 'Tab 1' }} component={ Tab1Screen } />
            <BottomTabAndroid.Screen name="TobTapNavigator" options={{ title: 'Top Tap' }} component={ TopTapNavigator } />
            <BottomTabAndroid.Screen name="StackNavigator" options={{ title: 'Stack' }} component={ StackNavigator } />
        </BottomTabAndroid.Navigator>
    );
}

// Menu para IOS
const BottomTabIOS = createBottomTabNavigator();

const TabsIOS = () => {
    return (
        <BottomTabIOS.Navigator 
            sceneContainerStyle={{
                backgroundColor: 'white'
            }}
            tabBarOptions={{
                activeTintColor: colores.primary,
                style: {
                    borderTopColor: colores.primary,
                    borderTopWidth: 0,
                    elevation: 0
                },
                labelStyle: {
                    fontSize: 15
                }
            }}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, focused, size  }) => { 

                    console.log( route.name )

                    let iconName : string = '';

                    switch ( route.name ) {
                        case 'Tab1Screen':
                            iconName = 'T1';
                        break;
                        case 'TopTapNavigator':
                            iconName = 'T2';
                        break;
                        case 'StackNavigator':
                            iconName = 'St';
                        break;    
                    }

                    // console.log( iconName );

                    return (
                        <Text style={{ color: color }}>
                            <Icon name='settings-outline' size={ 20 } color={ colores.primary } />
                        </Text>
                    );
                }
            })}
        >
            {/* <BottomTabIOS.Screen name="Tab1Screen" options={{ title: 'BottomTabAndroid 1', tabBarIcon: ( props ) => <Text style={{ color: props.color }}>T1</Text> }}component={ Tab1Screen } /> */}
            <BottomTabIOS.Screen name="Tab1Screen" options={{ title: 'Tab 1' }}component={ Tab1Screen } />
            <BottomTabIOS.Screen name="TopTabNavigator" options={{ title: 'Top Tap' }}component={ TopTapNavigator } />
            <BottomTabIOS.Screen name="StackNavigator" options={{ title: 'Stack' }}component={ StackNavigator } />
        </BottomTabIOS.Navigator>
    );
}
