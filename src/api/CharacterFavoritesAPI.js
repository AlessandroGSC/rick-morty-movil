import React, { useState, useEffect } from 'react'
import { View, Text, FlatList } from 'react-native'
import {API_URL} from '@env';
import axios from 'axios';
import RickAndMortyList from '../components/RickAndMortyList';
import CharactersList from '../components/CharactersList';


export default function CharacterFavoriteAPI({textCharacters}) {

    console.log("TEXT CHA");
    console.log(textCharacters);
    const [listCharacters, setListCharacters] = useState([]);

    const getCharacters = async () => {
        console.log("ENTRY 1");
        console.log("GET CHARCATERS");
        try {
            const response = await axios.get(API_URL+"/"+textCharacters);
            setListCharacters(response.data.results);
            console.log(response.data)
        } catch (error) {
            console.log("ERROR FETCHING DATA");   
            console.log(error);   
        }
    }

    useEffect(() => {
        console.log("ENTRY USEEEFTC")
        getCharacters();
    }, []);

    return (
        <View>
            <CharactersList characters={listCharacters} />
        </View>
    )
}