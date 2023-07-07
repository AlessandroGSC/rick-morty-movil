import React, { useState, useEffect } from 'react'
import { View, Text, FlatList } from 'react-native'
import {API_URL} from '@env';
import axios from 'axios';
import RickAndMortyList from '../components/RickAndMortyList';


export default function RickAndMortyAPI() {

    const [listCharacters, setListCharacters] = useState([]);
    const [infoApi, setInfoApi] = useState({});
    const [nextPage, setNextPage] = useState(null);

    const getCharacters = async () => {
        console.log("ENTRY 1");
        try {
            const response = await axios.get(API_URL);
            setListCharacters(response.data.results);
            console.log(response.data)
            setNextPage(response.data.info.next);
        } catch (error) {
            console.log("ERROR FETCHING DATA");   
            console.log(error);   
        }
    }

    const getMoreCharacters = async () => {
        console.log("entr 1")
        console.log(infoApi.next)
        if(nextPage) {
            try {
                const response = await axios.get(nextPage);
                const arrayChar = response.data.results;
                // arrayChar.map((ch) => {
                //     listCharacters.push(ch);
                // });
                setListCharacters([...listCharacters, ...arrayChar]);
                setNextPage(response.data.info.next);
            } catch (error) {
                console.log("ERROR FETCHING");
                console.log(error);
            }
        }
    }
    
    useEffect(() => {
        getCharacters();
    }, []);

    return (
        <View>
            <RickAndMortyList characters={listCharacters} nextPage={nextPage} getMoreCharacters={getMoreCharacters}/>
        </View>
    )
}