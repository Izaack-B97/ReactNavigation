import React, { useEffect } from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { View, Text } from 'react-native';
import { colores, styles } from '../theme/appTheme';

export const Tab1Screen = () => {

    useEffect(() => {
        console.log('useEffect Tab1Screen');
    }, [ ])
    
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
                <Text>
                    <Icon name="airplane-outline" size={ 80 } color={ colores.primary } />
                </Text>
                <Text>
                    <Icon name="alarm-outline" size={ 80 } color={ colores.primary } />
                </Text>
                <Text>
                    <Icon name="american-football-outline" size={ 80 } color={ colores.primary } />
                </Text>
                <Text>
                    <Icon name="bag-handle-outline" size={ 80 } color={ colores.primary } />
                </Text>
                <Text>
                    <Icon name="battery-charging-outline" size={ 80 } color={ colores.primary } />
                </Text>
                <Text>
                    <Icon name="chevron-back-circle-outline" size={ 80 } color={ colores.primary } />
                </Text>
                <Text>
                    <Icon name="cloudy-outline" size={ 80 } color={ colores.primary } />
                </Text>
                <Text>
                    <Icon name="expand-outline" size={ 80 } color={ colores.primary } />
                </Text>
                <Text>
                    <Icon name="grid-outline" size={ 80 } color={ colores.primary } />
                </Text>
                <Text>
                    <Icon name="invert-mode-outline" size={ 80 } color={ colores.primary } />
                </Text>
            </View>            
        </View>
    )
}
