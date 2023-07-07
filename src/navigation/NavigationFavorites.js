import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import Favoritos from '../screen/Favoritos';
import CharacterDetail from '../screen/CharacterDetail';

export default function NavigationStack() {

    const Stack = createStackNavigator();

    return (
        <Stack.Navigator initialRouteName='Favoritos'>
            <Stack.Screen 
                name='Character' 
                component={CharacterDetail}
                options={{
                    headerTransparent: true,
                    title: '',
                }}
                
            />
            <Stack.Screen 
                name='Favoritos' 
                component={Favoritos}
                options={{
                    title: 'Mis favoritos'
                }}
            />
        </Stack.Navigator>
    )
}