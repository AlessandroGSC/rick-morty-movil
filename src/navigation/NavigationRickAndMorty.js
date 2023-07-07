import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import CharacterDetail from '../screen/CharacterDetail';
import RickAndMortyAPI from '../api/RickAndMortyAPI';
export default function NavigationRickAndMorty() {

    const Stack = createStackNavigator();

    return (
        <Stack.Navigator initialRouteName='RickAndMortyList'>
            <Stack.Screen 
                name='Character' 
                component={CharacterDetail}
                options={{
                    headerTransparent: true,
                    title: '',
                }}
                
            />
            <Stack.Screen
                name='RickAndMortyList'
                component={RickAndMortyAPI}
                options={{
                    title: '',
                    headerTransparent: true
                }}
            />
        </Stack.Navigator>
    )
}