import { View, Text, StyleSheet, Image, ScrollView, ImageBackground, Dimensions } from 'react-native'
import React from 'react'
import { SafeAreaView, SafeAreaViewProps } from 'react-native-safe-area-context';
import HeaderCharacter from '../charactersComponents/HeaderCharacter';
import rickImg from '../assets/iconoram.png';
import portal from '../assets/portal_png.png';
import planets from '../assets/planets_png.png';
import portalGif from '../assets/portal_gif.gif';
import galaxyPlanet from '../assets/galaxy_planet.jpg';
import planetSec from '../assets/planet_sec.jpg';
import { FontAwesome, FontAwesome5, MaterialCommunityIcons, MaterialIcons, Feather } from '@expo/vector-icons';
import { Badge } from 'react-native-paper';
import IndicatorInfo from '../charactersComponents/IndicatorInfo';
const { width, height} = Dimensions.get('screen');
const COLOR_PRINCIPAL = '#219ebc';

export default function CharacterDetailV2(props) {
    const { name, image, status, species, gender, type, origin} = props.route.params.data;
    console.log(origin)
    return (
        <SafeAreaView
            style={styles.container}
        >
            <ScrollView>
                <View style={{flex: 0.4, backgroundColor: COLOR_PRINCIPAL, borderBottomLeftRadius: 30, borderBottomRightRadius: 30}}>
                    <HeaderCharacter image={image}/>
                </View>
                

                <View style={{ flex: 0.6, marginTop: 40 }}>
                    <View style={{marginHorizontal: 10, backgroundColor: COLOR_PRINCIPAL, borderRadius: 50}}>
                        <Text style={{fontSize: 30, fontStyle: 'italic', textAlign: 'center', color: '#FFF'}}>{name}</Text>
                    </View>
            
                    <View style={{flex: 1, marginTop: 20}}>
                        <View style={{flexDirection: 'row', justifyContent: 'center'}}> 
                            <View style={{flex: 0.1}}></View>
                            <View style={{flex: 0.2, marginHorizontal: 30}}>
                                <IndicatorInfo infoData={status} icon={<FontAwesome name="heartbeat" size={30} color={COLOR_PRINCIPAL} />} />
                            </View>
                            <View style={{flex: 0.2, marginHorizontal: 30}}>
                                <IndicatorInfo infoData={species} icon={<MaterialCommunityIcons name="human-capacity-increase" size={25} color={COLOR_PRINCIPAL} />} />
                            </View>
                            <View style={{flex: 0.2, marginHorizontal: 30}}>
                                <IndicatorInfo infoData={gender} icon={<FontAwesome5 name="transgender-alt" size={25} color={COLOR_PRINCIPAL} />} />
                            </View>
                            {type != '' && (
                                <View style={{flex: 0.2, marginHorizontal: 30}}>
                                    <IndicatorInfo infoData={type} icon={<Feather name="type" size={25} color={COLOR_PRINCIPAL} />} />
                                </View>
                            )}
                            <View style={{flex: 0.1}}></View>
                        </View>

                        <View
                            style={{borderRadius: 20, margin: 10}}
                        >
                            <ImageBackground
                                source={galaxyPlanet}
                                style={{borderRadius: 20, overflow: 'hidden'}}
                            >

                                <View style={{flexDirection: 'row'}}>
                                        <View style={{flex: 0.5, justifyContent: 'center', alignContent: 'center', alignItems: 'center'}}>
                                            <Text style={{color: '#fff'}}>Origen:</Text>
                                            <Text style={{color: '#fff'}}>{origin.name}</Text>
                                            <Text style={{color: '#fff'}}>planet</Text>
                                            <Text style={{color: '#fff'}}>dimensions</Text>
                                        </View>
                                        <View style={{flex: 0.5}}>
                                            <Image 
                                                source={planets}
                                                style={{height: 150, width: 200}}
                                            />
                                        </View>
                                </View>
                            </ImageBackground>
                        </View>

                        <View style={{flex: 1, margin: 5}}>
                            <Text style={{marginTop: 50}}>{origin.name}</Text>
                            <Image 
                                source={planetSec}
                                style={{width: (width-10), height: 200, borderTopRightRadius: 20, borderTopLeftRadius: 20}}
                            />
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});