import { View, Text, ImageBackground, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react'
import RickAndMortyList from '../components/RickAndMortyList';
import back from '../assets/background-login.jpg';

export default function RickAndMorty() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Image 
        
        source={back}
        style={{height: 100, width: 100}}
        />
      <ImageBackground
        source={back}
        style={{flex: 1}}
      >
        

        <RickAndMortyList />
      </ImageBackground>
    </SafeAreaView>
  )
}