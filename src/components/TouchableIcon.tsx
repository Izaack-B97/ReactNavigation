import React, { useContext } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { colores } from '../theme/appTheme';
import { AuthContext } from '../context/AuthContext';

interface Props {
    name: string
}

export const TouchableIcon = ({ name } : Props ) => {    

    const { changeFavoriteIcon } = useContext( AuthContext )

    return (
        <TouchableOpacity key={ name } onPress={ () => changeFavoriteIcon( name ) }>
            <Text>
                <Icon name={ name } size={ 80 } color={ colores.primary } />
            </Text>
        </TouchableOpacity>
    )
}
