import React from 'react'
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentOptions, DrawerContentScrollView } from '@react-navigation/drawer';
// import { StackNavigator } from './StackNavigator';
import { SettingsScreen } from '../screens/SettingsScreen';
import { useWindowDimensions, Text, View, Image } from 'react-native';
import { styles, colores } from '../theme/appTheme';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Tabs } from './Tabs';
import Icon from 'react-native-vector-icons/Ionicons';

const Drawer = createDrawerNavigator();

export const MenuLateral = () => {


    const { width } = useWindowDimensions();
    
    // <Drawer.Screen name="StackNavigator" options={{ title:'Home' }} component={ StackNavigator } />
    
    return (
        <Drawer.Navigator/*  drawerPosition="right" */ drawerType={ width > 720 ? 'permanent' : 'front' } drawerContent={ (props) => <MenuInterno { ...props }/>}>
            <Drawer.Screen name="Tabs" options={{ title:'Tabs' }} component={ Tabs } />
            <Drawer.Screen name="SettingsScreen" options={{ title:'Settings' }} component={ SettingsScreen } />
        </Drawer.Navigator>
    )
}

const MenuInterno = ( { navigation } : DrawerContentComponentProps<DrawerContentOptions>) => {
    
    return (
        <DrawerContentScrollView>
            <View style={ styles.avatarContainer }>
                <Image 
                    source={{
                        uri: 'https://cencup.com/wp-content/uploads/2019/07/avatar-placeholder.png'
                    }}
                    style={ styles.avatar }
                />
            </View>
            <View style={ styles.menuContainer }>
                    <TouchableOpacity style={{ ...styles.menuBoton, flexDirection: 'row'}} onPress={ () => navigation.navigate('Tabs') }>
                        <Text style={ styles.textMenu }>
                            <Icon name="color-filter-outline" size={ 30 } color={ colores.primary } />
                                Tabs
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ ...styles.menuBoton, flexDirection: 'row'}} onPress={ () => navigation.navigate('SettingsScreen') }>
                        <Text style={ styles.textMenu }>
                            <Icon name="earth-outline" size={ 30 } color={ colores.primary } />
                            Settings
                        </Text>
                    </TouchableOpacity>
            </View>
        </DrawerContentScrollView>
    );
}