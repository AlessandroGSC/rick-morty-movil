import { View, Text, StyleSheet, Image, ScrollView, ImageBackground, Dimensions } from 'react-native'
import React, {useEffect, useState} from 'react'
import { SafeAreaView, SafeAreaViewProps } from 'react-native-safe-area-context';
import HeaderCharacter from '../charactersComponents/HeaderCharacter';
import portalBack from '../assets/portal_green.png';
import galaxyBack from '../assets/galaxy_background.jpg';
import { FontAwesome, FontAwesome5, MaterialCommunityIcons, MaterialIcons, Feather } from '@expo/vector-icons';
import IndicatorInfo from '../charactersComponents/IndicatorInfo';
import { StatusBar } from 'expo-status-bar';
import axios from 'axios';
import CardPlanets from '../charactersComponents/CardPlanets';
import { FlatList } from 'react-native-gesture-handler';
import CardEpisode from '../charactersComponents/CardEpisode';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import useAuth from '../hooks/useAuth';
import ButtonFavorite from '../components/ButtonFavorite';

const { width, height} = Dimensions.get('screen');
const COLOR_PRINCIPAL = 'rgba(33,158,188,0.2)'; //'#219ebc'
const COLOR_TEXT = '#219ebc';

export default function CharacterDetail(props) {
    const { id, name, image, status, species, gender, type, origin, location, episode} = props.route.params.data;
    // console.log(episode)
    const {auth} = useAuth();

    // Origin
    const [planetOrigin, setPlanetOrigin] = useState("");
    const [dimensionsOrigin, setDimensionsOrigin] = useState("");
    const [typeOrigin, setTypeOrigin] = useState("");

    // Location
    const [planetLocation, setPlanetLocation] = useState("");
    const [dimensionsLocation, setDimensionsLocation] = useState("");
    const [typeLocation, setTypeLocation] = useState("");

    // Episodes 
    const [listEpisodes, setListEpisodes] = useState([]);

    // Variables animacion
    const scalePortal = useSharedValue(0);

    // Funciones animacion
    const reanimatedScalePortal = useAnimatedStyle(() => {
        return {
            transform: [{scale: scalePortal.value}],
        }
    }, []);

    const getOrigin = async () => {
        try {
            if(origin.url != "") {
                const response = await axios.get(origin.url);
                const {dimension, name, residents, type, created} = response.data;
                setPlanetOrigin(name);
                setDimensionsOrigin(dimension);
                setTypeOrigin(type);
            }else {
                setPlanetOrigin(origin.name);
            }
            

        } catch (error) {
            console.log(error);
        }
    }

    const getLocation = async () => {
        try {
            if(location.url != "") {
                const response = await axios.get(location.url);
                const {dimension, name, residents, type, created} = response.data;
                setPlanetLocation(name);
                setDimensionsLocation(dimension);
                setTypeLocation(type);
            }else {
            }
            

        } catch (error) {
            console.log(error);
        }
    }
    const getEpisodes = async () => {
        try {
            await Promise.all(episode.map(async (ep) => {
                const response = await axios.get(ep);
                console.log(response.data)
                listEpisodes.push(response.data);
            }));

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        setTimeout(() => {
            scalePortal.value = withSpring(1);
        }, 200);
        getOrigin();
        getLocation();
        getEpisodes();
    }, []);
    return (
        <SafeAreaView
            style={styles.container}
        >
            <StatusBar backgroundColor='rgba(000,000,000,0.9)' style='light'/>
            <ScrollView>
                
                <ImageBackground
                    source={galaxyBack}
                >
                    {auth ? <ButtonFavorite id={id}/> : ''}
                    <Animated.View style={[
                        {flex: 0.4, marginTop: 5, justifyContent:'center', alignItems: 'center', borderBottomLeftRadius: 30, borderBottomRightRadius: 30},
                        reanimatedScalePortal
                    ]}>
                        <Image 
                            source={portalBack}
                            style={{width: 480, height: 400}}
                        
                        />
                        <HeaderCharacter image={image}/>
                        
                    </Animated.View>
                    

                    <View style={{ flex: 0.6, marginTop: 50 }}>
                        
                        <View style={{marginHorizontal: 10, backgroundColor: COLOR_PRINCIPAL, borderRadius: 50}}>
                            <Text style={{fontSize: 30, fontStyle: 'italic', textAlign: 'center', color: '#FFF'}}>{name}</Text>
                        </View>
                
                        <View style={{flex: 1, marginTop: 20, marginBottom: 50}}>
                            <View style={{flexDirection: 'row', justifyContent: 'center'}}> 
                                <View style={{flex: 0.1}}></View>
                                <View style={{flex: 0.2, marginHorizontal: 30}}>
                                    <IndicatorInfo infoData={status} icon={<FontAwesome name="heartbeat" size={30} color={COLOR_TEXT} />} />
                                </View>
                                <View style={{flex: 0.2, marginHorizontal: 30}}>
                                    <IndicatorInfo infoData={species} icon={<MaterialCommunityIcons name="human-capacity-increase" size={25} color={COLOR_TEXT} />} />
                                </View>
                                <View style={{flex: 0.2, marginHorizontal: 30}}>
                                    <IndicatorInfo infoData={gender} icon={<FontAwesome5 name="transgender-alt" size={25} color={COLOR_TEXT} />} />
                                </View>
                                {type != '' && (
                                    <View style={{flex: 0.2, marginHorizontal: 30}}>
                                        <IndicatorInfo infoData={type} icon={<Feather name="type" size={25} color={COLOR_TEXT} />} />
                                    </View>
                                )}
                                <View style={{flex: 0.1}}></View>
                            </View>

                            <CardPlanets typeCard={'origin'} planet={planetOrigin} type={typeOrigin} dimensions={dimensionsOrigin} />
                            <CardPlanets typeCard={'location'} planet={planetLocation} type={typeLocation} dimensions={dimensionsLocation} />

                            <FlatList 
                                data={listEpisodes}
                                horizontal={true}
                                keyExtractor={(eps) => eps.id}
                                renderItem={({item}) => {return (
                                    <CardEpisode data={item}/>
                                )}}
                            />
                            
                            

                            
                        </View>
                    </View>
                </ImageBackground>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});