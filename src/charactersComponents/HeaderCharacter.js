import { View, Text, Image } from 'react-native'
import React from 'react'
import portalBack from '../assets/portal_green.png';

export default function HeaderCharacter({image}) {
    return (
        <View style={{ alignSelf: 'center', height: 300, marginTop: -350}}>
            
            {/* <View style={{backgroundColor: '#8FC0A9', padding: 10, borderRadius: 30, height: 250, width: 350, alignItems: 'center'}}>
                
                
            </View> */}
            {/* <Image 
                source={{uri: image}}
                style={{height: 300, width: 300, borderRadius:800, marginTop:20, borderWidth: 4, borderColor: '#effcff'}}
            /> */}
            
            <Image 
                source={{uri: image}}
                style={{height: 250, width: 210, borderRadius: 100, marginTop:20}}
            />
        </View>
    )
}