import React, { useEffect } from 'react'
import { View, Text } from 'react-native';
import { styles } from '../theme/appTheme';

export const Tab2Screen = () => {

    useEffect(() => {
        console.log('useEffect Tab2Screen');
    }, [ ])
    
    return (
        <View  style={{
            ...styles.globalMargin,
            marginTop: 10
        }}>
            <Text style={ styles.title }> Tab2Screen </Text>
        </View>
    )
}
