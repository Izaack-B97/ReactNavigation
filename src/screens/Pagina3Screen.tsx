import React from 'react'
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { styles } from '../theme/appTheme';
import { StackScreenProps } from '@react-navigation/stack';

interface Props extends StackScreenProps <any, any>{ }

export const Pagina3Screen = ( { navigation } : Props ) => {
    
    return (
        <View style={ styles.globalMargin }>
            <Text style={ styles.title }> Pagina 3 Screen </Text>
            <Button title='Regresar' onPress={ () => navigation.pop()  }/>
            <Button title='Ir al Home' onPress={ () => navigation.popToTop()  }/>
        </View>
    )
}
