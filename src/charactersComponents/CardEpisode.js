import { View, Text, ImageBackground, StyleSheet } from 'react-native'
import React from 'react'
import portalGif from '../assets/portal_gif.gif';

export default function CardEpisode({data}) {
    const { air_date, name, episode } = data;
    return (
        <View style={styles.container}>
            <ImageBackground
                source={portalGif}
                style={styles.imageCard}
            >
                <Text style={styles.textData}>Episodio: {episode}</Text>
                <Text style={styles.textData}>{name}</Text>
                <Text style={styles.textData}>{air_date}</Text>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 10,
        shadowColor: '#fff',
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
        borderRadius: 10, 
    },
    imageCard: {
        width: 200, 
        height: 150, 
        borderRadius: 10, 
        overflow: 'hidden', 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    textData: {
        textAlign: 'center', 
        color: '#fff', 
        backgroundColor: 'rgba(000,000,000,0.2)',
        fontSize: 16
    }
})