import { DrawerScreenProps } from '@react-navigation/drawer';
import { StackScreenProps } from '@react-navigation/stack';
import React, { useEffect } from 'react'
import { View, Text, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { styles, colores } from '../theme/appTheme';

import Icon from 'react-native-vector-icons/Ionicons';

// interface Props extends StackScreenProps<any, any> { };
interface Props extends DrawerScreenProps<any, any> { };


export const Pagina1Screen = ( { navigation }: Props ) => {

    useEffect(() => {
        
        navigation.setOptions({
            headerLeft: () => {
                return (
                    <TouchableOpacity onPress={ () => navigation.toggleDrawer() }>
                        <Text style={{ marginLeft: 20 }}>
                            <Icon name="menu-outline" size={ 30 } color={ colores.primary } />
                        </Text>
                    </TouchableOpacity>
                )
            }
        });

    }, [  ])


    return (
        <View style={ styles.globalMargin }>
            <Text style={ styles.title }> Pagina 1 Screen </Text>
            <Button title='Ir a la pagina 2' onPress={ () =>  navigation.navigate('Pagina2Screen')}/>
            <Button title='Ir a la pagina persona' onPress={ () =>  navigation.navigate('PersonaScreen')}/>
            
            <Text style={{ marginVertical: 20, fontSize: 20, marginLeft: 5 }}>Navegacion con parametros</Text>
            
            <View style={{ flexDirection: 'row' }}>
                
                <TouchableOpacity style={ styles.boton } onPress={() => navigation.navigate('PersonaScreen', {
                    id: 1,
                    nombre: 'Isaac Bustamante',
                })}>
                    <Text style={ styles.botonText }>
                        <Icon name="man-outline" size={ 30 } color='white' /> Isaac
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={{
                    ...styles.boton,
                    backgroundColor: 'cyan',
                    marginLeft: 10
                }} onPress={() => navigation.navigate('PersonaScreen', {
                    id: 2,
                    nombre: 'Maria Gutierrez',
                })}>
                    <Text style={ styles.botonText }>
                        <Icon name="woman-outline" size={ 30 } color='white' /> Maria
                    </Text>
                </TouchableOpacity>

            </View>

        </View>
    )
}
