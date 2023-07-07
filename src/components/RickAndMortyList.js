import { View, Text, FlatList, StyleSheet, ActivityIndicator, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useEffect, useState, useRef } from 'react'
import RickAndMortyCard from './RickAndMortyCard';
import axios from 'axios';
import back from '../assets/background-login.jpg';
import { ImageBackground } from 'react-native';

export default function RickAndMortyList(props) {

console.log(props);
    const { characters, infoApi, getMoreCharacters, nextPage } = props;

    const getNextPageCharacters = async () => {
        getMoreCharacters();
    }

    return (
        <SafeAreaView>
            <ImageBackground
                source={back}
            
            >

            
                <FlatList 
                    data={characters}
                    numColumns={2}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(char) => String(char.id)}
                    renderItem={({item}) =>  {return (<RickAndMortyCard character={item}/>)}}
                    contentContainerStyle={styles.container}
                    onEndReached={nextPage && getNextPageCharacters}
                    onEndReachedThreshold={0.1}
                    ListFooterComponent={nextPage && (
                        <ActivityIndicator size={'large'} color={'#219EBC'} style={{marginBottom: 50, marginTop: 10}}/>
                    )}
                />
            </ImageBackground>
            
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 15
    }
})