import React, { useContext } from 'react'
import { View, Text, Button } from 'react-native';
import { styles } from '../theme/appTheme';
import { AuthContext } from '../context/AuthContext';

export const AlbumsScreen = () => {

    const { logOut, authState:{ isLoggedIn } } = useContext( AuthContext )

    return (
        <View style={ styles.globalMargin }>
            <Text style={ styles.title }>Albums Screen</Text>
            { isLoggedIn && <Button title="LogOut" onPress={ logOut } /> }
        </View>
    )
}
