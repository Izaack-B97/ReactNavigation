import React, { useContext, useEffect } from 'react'
import { View, Text } from 'react-native';
import { styles } from '../theme/appTheme';
import { AuthContext } from '../context/AuthContext';

export const PersonaScreen = ( { route, navigation } : any ) => {

    const params = route.params;

    useEffect(() => {
        
        navigation.setOptions({
            title: params?.nombre || 'Persona'
        });

    }, [ ])

    const { changeName }  = useContext( AuthContext )

    useEffect(() => {
        if ( params.hasOwnProperty('nombre') ) {
            changeName( params.nombre );
        }
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
