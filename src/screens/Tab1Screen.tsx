import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native';
import { styles } from '../theme/appTheme';
import { TouchableIcon } from '../components/TouchableIcon';

export const Tab1Screen = () => {

    useEffect(() => {
        console.log('useEffect Tab1Screen');
    }, [ ])
    
    const iconNames = [
        'airplane-outline',
        'alarm-outline',
        'american-football-outline',
        'chatbox-outline',
        'battery-charging-outline',
        'chevron-back-circle-outline',
        'cloudy-outline',
        'expand-outline',
        'grid-outline',
        'cash-outline'
    ];

    return (
        <View  style={{
            ...styles.globalMargin,
            marginTop: 10
        }}>
            <Text style={ styles.title }> Icons </Text>
            
            <View style={{
                flexDirection: 'row',
                flexWrap: 'wrap'
            }}>
                {
                    iconNames.map( name => {
                        return <TouchableIcon key={ name } name={ name }   />
                    })
                }
            </View>                    
        </View>
    )
}
