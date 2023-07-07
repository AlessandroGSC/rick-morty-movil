import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import Account from '../screen/Account';

export default function NavigationStack() {

    const Stack = createStackNavigator();

    return (
        <Stack.Navigator>
            <Stack.Screen 
                name='Account' 
                component={Account}
                options={{headerShown: false}}

            />
        </Stack.Navigator>
    )
}