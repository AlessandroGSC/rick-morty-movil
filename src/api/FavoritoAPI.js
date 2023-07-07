import { View, Text } from 'react-native'
import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {include, pull } from 'lodash'
import { FAVORITE_STORAGE } from '../utils/constants'

export const getFavoriteAPI = async () => {
    try {
        const response = await AsyncStorage.getItem(FAVORITE_STORAGE);
        return response != null ?  JSON.parse(response) : [];
    } catch (error) {
        console.log(error);
    }
}

export const addFavoriteAPI = async (id) => {
    try{
        const favorites = await getFavoriteAPI();
        favorites.push(id);
        await AsyncStorage.setItem(FAVORITE_STORAGE, JSON.stringify(favorites));

    }catch (error) {
        console.log("error");
    }
}

export const isFavoriteAPI = async (id) => {
    try {
        const favorites = await getFavoriteAPI();
        return favorites.includes(id);
    } catch (error) {
        console.log(error);
    }
}

export const removeFavoriteAPI = async (id) => {
    try {
        const favorites = await getFavoriteAPI();
        const filter = favorites.filter((item) => {
            return item != id
        });
        await AsyncStorage.setItem(FAVORITE_STORAGE, JSON.stringify(filter));

    } catch (error) {
        console.log(error);
    }
}