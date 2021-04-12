import React, { useEffect } from 'react'
import { View, Text } from 'react-native';
import { styles } from '../theme/appTheme';

export const Tab3Screen = () => {

    useEffect(() => {
        console.log('useEffect Tab3Screen');
    }, [ ])

    return (
        <View style={{
            ...styles.globalMargin,
            marginTop: 10
        }}>
            <Text style={ styles.title }> Tab3Screen </Text>
        </View>
    )
}
