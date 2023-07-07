import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useEffect, useState, useCallback } from 'react'
import { getFavoriteAPI } from '../api/FavoritoAPI';
import useAuth from '../hooks/useAuth';
import CharacterFavoriteAPI from '../api/CharacterFavoritesAPI';
import { useIsFocused, useFocusEffect } from '@react-navigation/native';
import CharactersList from '../components/CharactersList';
import axios from 'axios';
import { API_URL } from '@env';
import back from '../assets/background-login.jpg';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

export default function Favoritos() {

  const navigator = useNavigation();
  const { auth } = useAuth();
  const [characters, setCharacters] = useState('');
  const isFocused = useIsFocused();

  const [listCharacters, setListCharacters] = useState([]);

    const getCharacters = async () => {
        console.log("GET CHARCATERS");
        try {
            const response = await axios.get(API_URL+"/"+characters);
            setListCharacters(Array.isArray(response.data) ? response.data : [response.data]);
            // console.log(response.data)
            console.log(listCharacters)
        } catch (error) {
            console.log("ERROR FETCHING DATA");   
            console.log(error);   
        }
    }


  const getFavorites = async () => {
    const response = await getFavoriteAPI();
    setCharacters(response.length === 0 ? "" : response.toString());
    if(response.length > 0) {
      getCharacters();
    }else {
      setListCharacters([]);
    }

  }

  const handleGoLogin = () => {
    navigator.navigate("Account", {

    })
  }

  useFocusEffect(
    useCallback(() => {
      if(auth) {
        getFavorites();
      }

    })
  )

  // useEffect(() => { 
  //   if(isFocused) {
  //     getFavorites();

  //   }
  // }, [isFocused]);

  return (
    <View style={{flex: 1}}>
      <ImageBackground
          source={back}
          style={{flex: 1}}
      
      >
          {/* <CharactersList characters={listCharacters} /> */}
        {auth ? <CharactersList characters={listCharacters} /> 
        : 
        <View style={{flex: 1, justifyContent: 'center', alignContent: 'center'}}>
          <Text style={{color: '#fff', textAlign: 'center', fontSize: 16}}>Para visualizar los favoritos debes de iniciar sesión</Text>
          <Button
              icon=""
              mode="contained"
              style={styles.btnLogin}
              onPress={() => handleGoLogin()}
          >
              Iniciar sesión
          </Button>
        </View>}
      </ImageBackground>
      {/* {auth ? <CharactersList characters={listCharacters} /> : <View></View>} */}
      {/* <Button title="Obtener" onPress={() => getFavorites()}/> */}

    </View>
  )
}

const styles = StyleSheet.create({
    btnLogin: {
        marginTop: 15,
        marginBottom: 8,
        marginHorizontal: 10,
        padding: 2,
        borderRadius: 30,
        borderWidth: 1,
        borderColor: '#00d0ff',
        display: "flex",
        backgroundColor: '#219EBC'
    }
});