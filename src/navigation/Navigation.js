import { View, Text, Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import RickAndMorty from '../screen/RickAndMorty';
import Icon from 'react-native-vector-icons/FontAwesome5';
import rickImg from '../assets/iconoram.png';
import NavigationAccount from './NavigationAccount';
import NavigationFavorites from './NavigationFavorites';
import RickAndMortyAPI from '../api/RickAndMortyAPI';
import NavigationRickAndMorty from './NavigationRickAndMorty';
import LoginForm from '../components/auth/LoginForm';

export default function Navigation() {

    const Tab = createBottomTabNavigator();
    function bottomTabNavigation() {
        return (
            <Tab.Navigator initialRouteName='RickAndMorty'>
                <Tab.Screen 
                    name='Account' 
                    component={NavigationAccount}
                    options={{
                        tabBarLabel: "Mi cuenta",
                        tabBarIcon: ({color, size}) => (
                            <Icon name='user' color={color} size={size}/>
                        )
                    }}
                />
                <Tab.Screen 
                    name='RickAndMorty' 
                    component={NavigationRickAndMorty}
                    options={{
                        tabBarLabel: '',
                        tabBarIcon: () => renderImageMorty(),
                    }}
                />
                <Tab.Screen 
                    name='Favoritos' 
                    component={NavigationFavorites} 
                    options={{
                        tabBarLabel: 'Mis favoritos',
                        tabBarIcon: ({color, size}) => (
                            <Icon name='heart' color={color} size={size} />
                        ),
                    }}
                />
                {/* <Tab.Screen 
                    name='RickAndMortyCharacters' 
                    component={NavigationRickAndMorty} 
                    options={{
                        tabBarVisible: false,
                    }}
                /> */}
            </Tab.Navigator>
        )
        
    }

    const Stack = createStackNavigator();

    return (
        // <Stack.Navigator initialRouteName="LoginForm">
        //     <Stack.Screen 
        //         name="LoginForm" 
        //         component={LoginForm} 
        //         options={{headerShown: false}}
        //     />
        //     <Stack.Screen 
        //         name="BottomNavigation" 
        //         component={bottomTabNavigation}
        //         options={{

        //             headerShown: false,
                   
        //         }}
        //     />

        // </Stack.Navigator>

        <Tab.Navigator initialRouteName='RickAndMorty'>
                <Tab.Screen 
                    name='Account' 
                    component={NavigationAccount}
                    options={{
                        tabBarLabel: "Mi cuenta",
                        tabBarIcon: ({color, size}) => (
                            <Icon name='user' color={color} size={size}/>
                        )
                    }}
                />
                <Tab.Screen 
                    name='RickAndMorty' 
                    component={NavigationRickAndMorty}
                    options={{
                        tabBarLabel: '',
                        tabBarIcon: () => renderImageMorty(),
                    }}
                />
                <Tab.Screen 
                    name='Favoritos' 
                    component={NavigationFavorites} 
                    options={{
                        tabBarLabel: 'Mis favoritos',
                        tabBarIcon: ({color, size}) => (
                            <Icon name='heart' color={color} size={size} />
                        ),
                    }}
                />
                {/* <Tab.Screen 
                    name='RickAndMortyCharacters' 
                    component={NavigationRickAndMorty} 
                    options={{
                        tabBarVisible: false,
                    }}
                /> */}
            </Tab.Navigator>
    )
}

const renderImageMorty = () => {
    return (
        <Image source={rickImg} style={{height: 75, width: 75, top: -20}}/>
    )
}