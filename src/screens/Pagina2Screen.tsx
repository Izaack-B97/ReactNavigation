import { useNavigation } from '@react-navigation/core';
import React from 'react'
import { View, Text, Button } from 'react-native';
import { styles } from '../theme/appTheme';

export const Pagina2Screen = () => {

    const navigation = useNavigation()

    return (
        <View style={ styles.globalMargin }>
            <Text style={ styles.title }> Pagina 2 Screen </Text>
            <Button title="Ir a la pagina 3" onPress={ () => navigation.navigate('Pagina3Screen') }/>
        </View>
    )
}
