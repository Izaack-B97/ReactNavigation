import React from 'react';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ChatScreen } from '../screens/ChatScreen';
import { ContactScreen } from '../screens/ContactScreen';
import { AlbumsScreen } from '../screens/AlbumsScreen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colores, styles } from '../theme/appTheme';
import { Text } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';


const Tab = createMaterialTopTabNavigator();

export const TopTapNavigator = () => {
    
    const useInsets = useSafeAreaInsets();
    
    return (
        <Tab.Navigator 
            style={{ paddingTop: useInsets.top }}
            sceneContainerStyle={{
                backgroundColor: 'white',
            }}
            tabBarOptions={{
                pressColor: colores.primary,
                showIcon: true,
                indicatorStyle: {
                    backgroundColor: colores.primary,
                },
                style: {
                    borderTopColor: colores.primary,
                    borderWidth: 0,
                    elevation: 0
                }
            }}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, focused }) => { 

                    // console.log( route.name )

                    let iconName : string = '';

                    switch ( route.name ) {
                        case 'ChatScreen':
                            iconName = 'alarm-outline';
                        break;
                        case 'ContactScreen':
                            iconName = 'balloon-outline';
                        break;
                        case 'AlbumsScreen':
                            iconName = 'checkbox-outline';
                        break;    
                    }

                    // console.log( iconName );

                    return (
                        <Text style={{ color: color }}>
                            <Icon name={ iconName } size={ 20 } color={ colores.primary } />
                        </Text>
                    );
                }
            })}
        >
            <Tab.Screen name="ChatScreen" component={ ChatScreen } />
            <Tab.Screen name="ContactScreen" component={ ContactScreen } />
            <Tab.Screen name="AlbumsScreen" component={ AlbumsScreen } />
        </Tab.Navigator>
    );
}