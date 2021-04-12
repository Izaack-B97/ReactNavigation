import React, { useEffect } from 'react'
import { View, Text } from 'react-native';
import { styles } from '../theme/appTheme';

export const PersonaScreen = ( { route, navigation } : any ) => {

    const params = route.params;

    useEffect(() => {
        
        navigation.setOptions({
            title: params?.nombre || 'Persona'
        });

    }, [ ])


    return (
        <View style={ styles.globalMargin }>
            <Text style={ styles.title }>
            {
                JSON.stringify( params, null, 2 )
            }
            </Text>
        </View>
    )
}
