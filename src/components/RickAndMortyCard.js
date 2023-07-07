import { View, Text, TouchableOpacity, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { Badge } from 'react-native-paper';

export default function RickAndMortyCard(props) {

    const { character } = props;
    const navigation = useNavigation();
    const goToCharacter = () => {
        console.log(`Conoce mas del personje ${character.name}`);
        navigation.navigate('Character',{
            data: character
        });
    }

    return (
        <TouchableOpacity 
            onPress={() => goToCharacter()}
            style={styles.card}
        >
            <View style={styles.marginCard}>
                <View style={styles.colorCard}>
                    <View>
                        <Image source={{uri: character.image}} style={styles.image}/>
                    </View>
                    <View>
                        <Badge
                            style={{ alignSelf: 'flex-start', marginTop: 10, backgroundColor: '#fff'}}
                        >
                            <Text style={styles.number}>#{character.id}</Text>
                        </Badge>
                        <View style={styles.containerText}>
                            <Text style={styles.name} numberOfLines={3}>{character.name}</Text>
                        </View>
                    </View>
                    
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card: {
        flexGrow: 1,
        padding: 10,
    },
    marginCard: {
        flex: 1,
        padding: 5,
        backgroundColor: '#00d0ff',
        borderRadius: 20,
        
    },
    colorCard: {
        flex: 1,
        borderRadius: 20,
        backgroundColor: '#219EBC',
        flexDirection: 'column'
    },
    name: {
        textAlign: 'center',
        padding: 1,
        backgroundColor: '#00d0ff',
        fontSize: 14,
        fontStyle: 'italic',
        top: 12,
        borderRadius: 10,
        color: '#fff',
        width: 150
    },
    containerText: {
        height: 60
    },
    image: {
        height: 100,
        borderRadius: 20,
        resizeMode: 'contain'
    },
    number: {
        color: '#00d0ff',
        fontSize: 10
    }
})