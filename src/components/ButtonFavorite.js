import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { FontAwesome } from '@expo/vector-icons';
import { addFavoriteAPI, isFavoriteAPI, removeFavoriteAPI } from '../api/FavoritoAPI';

export default function ButtonFavorite({id}) {

    const [isFavorite, setIsFavorite] = useState(undefined);
    const [isPressing, setIsPressing] = useState(false);

    const handleAddFavorite = () => {
        setIsPressing(true);
        addFavoriteAPI(id);

    }

    const handleRemoveFavorite = () => {
        console.log("REMOVE FROM FAVORITOS "+ id);
        removeFavoriteAPI(id);
        setIsPressing(true);
    }

    const handleGetIsFavorite = async () => {
        const response = await isFavoriteAPI(id);
        if(response) {
            setIsFavorite(true);
            console.log("IS FAV")
        }else {
            setIsFavorite(false);
            console.log("IS NOT FAV")
        }
    }
 
    useEffect(() => {
        handleGetIsFavorite();
    }, []);

    useEffect(() => {
        if(isPressing) {
            setIsPressing(false);
            setTimeout(() => {
                handleGetIsFavorite();
            }, 100);
        }
    }, [isPressing]);
    return (
        <TouchableOpacity 
            style={styles.container}
            onPress={() => isFavorite ? handleRemoveFavorite() : handleAddFavorite() }
        >
            {isFavorite === false && (
                <FontAwesome name="heart-o" size={40} color="#219ebc" />
            )}
            {isFavorite && (
                <FontAwesome name="heart" size={40} color="#219ebc" />
            )}

            
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        zIndex: 1,
        position: 'absolute', 
        alignItems: 'flex-end', 
        top: 20, 
        right: 10,
        height: 60,        
        width: 60,
        backgroundColor: 'rgba(33,158,188,0.2)',
        justifyContent: 'center',
        alignItems:'center',
        borderRadius: 30
    }
})