import { View, Text, ImageBackground, Image, StyleSheet } from 'react-native'
import React from 'react'
import galaxyPlanet from '../assets/galaxy_planet.jpg';
import planets from '../assets/planets_png.png';

export default function CardPlanets({typeCard, planet, type, dimensions}) {
    const titleCard = typeCard.slice(0,1).toUpperCase().concat(typeCard.slice(1));
    return (
        <View
            style={styles.container}
        >
            <ImageBackground
                source={galaxyPlanet}
                style={styles.imageCard}
            >

                <View style={{flexDirection: 'row'}}>
                        <View style={styles.contentText}>
                            <Text style={{...styles.textData, fontStyle: 'normal'}}>{titleCard}:</Text>
                            <Text style={styles.textData}>{planet}</Text>
                            <Text style={styles.textData}>{type}</Text>
                            <Text style={styles.textData}>{dimensions}</Text>
                        </View>
                        <View style={{flex: 0.4}}>
                            {typeCard === 'origin' && (
                                <Image 
                                    source={planets}
                                    style={styles.imagePlanet}
                                />
                            )}
                        </View>
                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 20, 
        margin: 10,
        shadowColor: '#219ebc',
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5
    },
    imageCard: {
        borderRadius: 20, 
        overflow: 'hidden'
    },
    contentText: {
        flex: 0.6, 
        height: 150,
        justifyContent: 'center',
        alignContent: 'center', 
        alignItems: 'center',
        padding: 5
    },
    textData: {
        color: '#fff', 
        textAlign: 'center', 
        fontStyle: 'italic',
        fontSize: 16
    },
    imagePlanet: {
        height: 150, 
        width: 310
    }
})