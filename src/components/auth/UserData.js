import { View, Text, Dimensions, Image, StyleSheet, ImageBackground } from 'react-native'
import React, { useEffect, useCallback, useState} from 'react'
import imageBack from '../../assets/background-login.jpg'; 
import imageBack2 from '../../assets/Back_login_1.jpg'; 
import componenteTop from '../../assets/component-top-2.png';
import rickProfile1 from '../../assets/profile_rick_1.jpg';
import rickProfile2 from '../../assets/rick_profile_2.png';
import { FontAwesome, MaterialIcons, Ionicons, AntDesign } from '@expo/vector-icons';
import { userDetail } from '../../utils/userDB';
import useAuth from '../../hooks/useAuth';
import { Button } from 'react-native-paper';
import { ScrollView } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { getFavoriteAPI } from '../../api/FavoritoAPI';

const { width, height } = Dimensions.get('screen');

export default function UserData() {
    console.log(height)

    const { auth, logout } = useAuth();
    console.log(auth);
    const [numFavorites, setNumFavorites] = useState(0);

    const getFavorites = async () => {
        const response = await getFavoriteAPI();
        setNumFavorites(response.length);
    
    }

    useFocusEffect(
        useCallback(() => {
            if(auth) {
                getFavorites();
            }

        })
    )
    return (
        <View style={{flex: 1}}>
            <ScrollView>

                <View style={{flex: 0.3, backgroundColor: '#219EBC'}}>
                    <ImageBackground
                        source={componenteTop}
                        style={{height: 200, width: width, top: -150}}
                    >
                    </ImageBackground>
                    <Text style={{color: '#fff', fontSize: 30, fontStyle: 'italic', position: 'absolute', top: 30, alignSelf: 'center'}}>Mi cuenta</Text>
                </View>
                <View style={{flex: 0.7, marginTop: -36}}>
                    <View style={styles.containerImageProfile}>
                        <Image 
                            source={rickProfile1}
                            style={styles.imageProfile}
                        />
                    </View>
                        
                    <ImageBackground
                        source={imageBack}
                        style={{flex: 1, overflow: 'hidden', borderTopLeftRadius: 40, borderTopRightRadius: 40}}
                    >
                        
                            <View style={{flex: 1, marginTop: 65, margin: 20}}>
                                <View style={{backgroundColor: 'rgba(33,158,188,0.2)', padding: 10, borderRadius: 10, marginTop: 30}}>
                                    <View style={{justifyContent: 'center', alignItems: 'center', flexDirection: 'row'}}>
                                        <Ionicons name="person-circle" size={24} color="#219ebc" />
                                        <Text style={{marginLeft: 10, color: '#219ebc'}}>Nombre</Text>
                                    </View>
                                    <View>
                                        <Text style={{fontSize: 25, fontStyle: 'italic', color: '#fff', textAlign: 'center'}}>{auth.firstName} {auth.lastName}</Text>
                                    </View>
                                </View>

                                <View style={{ backgroundColor: 'rgba(33,158,188,0.2)', padding: 10, borderRadius: 10, marginTop: 30}}>
                                    <View style={{justifyContent: 'center', alignItems: 'center', flexDirection: 'row'}}>
                                        <MaterialIcons name="email" size={24} color="#219ebc" />
                                        <Text style={{marginLeft: 10, color: '#219ebc'}}>Email</Text>
                                    </View>
                                    <View>
                                        <Text style={{fontSize: 22, fontStyle: 'italic', color: '#fff', textAlign: 'center'}}>{auth.email}</Text>
                                    </View>
                                </View>
                                
                                <View style={{backgroundColor: 'rgba(33,158,188,0.2)', padding: 10, borderRadius: 10, marginTop: 30}}>
                                    <View style={{justifyContent: 'center', alignItems: 'center', flexDirection: 'row'}}>
                                        <FontAwesome name="user" size={24} color="#219ebc" />
                                        <Text style={{marginLeft: 10, color: '#219ebc'}}>Usuario</Text>
                                    </View>
                                    <View>
                                        <Text style={{fontSize: 22, fontStyle: 'italic', color: '#fff', textAlign: 'center'}}>{auth.username}</Text>
                                    </View>
                                </View>

                                <View style={{backgroundColor: 'rgba(33,158,188,0.2)', padding: 10, borderRadius: 10, marginTop: 30}}>
                                    <View style={{justifyContent: 'center', alignItems: 'center', flexDirection: 'row'}}>
                                        <AntDesign name="phone" size={24} color="#219ebc" />
                                        <Text style={{marginLeft: 10, color: '#219ebc'}}>Teléfono</Text>
                                    </View>
                                    <View>
                                        <Text style={{fontSize: 22, fontStyle: 'italic', color: '#fff', textAlign: 'center'}}>{auth.phone}</Text>
                                    </View>
                                </View>

                                <View style={{backgroundColor: 'rgba(33,158,188,0.2)', padding: 10, borderRadius: 10, marginTop: 30}}>
                                    <View style={{justifyContent: 'center', alignItems: 'center', flexDirection: 'row'}}>
                                        <AntDesign name="hearto" size={24} color="#219ebc" />
                                        <Text style={{marginLeft: 10, color: '#219ebc'}}>Favoritos</Text>
                                    </View>
                                    <View>
                                        <Text style={{fontSize: 22, fontStyle: 'italic', color: '#fff', textAlign: 'center'}}>{numFavorites}</Text>
                                    </View>
                                </View>

                                <Button
                                    icon="send"
                                    mode="contained"
                                    style={styles.btnLogout}
                                    onPress={() => logout()}
                                >
                                    Cerrar sesión
                                </Button>
                            </View>
                    </ImageBackground>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    containerImageProfile: {
        width: 150, 
        height: 150, 
        borderRadius: 100, 
        alignSelf: 'center',
        marginTop: -60, 
        position: 'absolute', 
        zIndex: 200,
        shadowColor: '#219ebc',
        shadowOpacity: 0.5,
        shadowRadius: 4,
        elevation: 8
    },
    imageProfile: {
        width: 150, 
        height: 150, 
        borderRadius: 100, 
        alignSelf: 'center',
        marginTop: -10, 
        position: 'absolute', 
        zIndex: 200,
        borderWidth: 2,
        borderColor: '#00d0ff'
    },
    btnLogout: {
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
})