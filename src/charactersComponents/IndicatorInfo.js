import { View, Text } from 'react-native'
import React from 'react'
import { Badge } from 'react-native-paper'
import { FontAwesome } from '@expo/vector-icons';

export default function IndicatorInfo({infoData, icon}) {
    const textSize = infoData.length > 10 ? 10 : 15;
    return (
        <View style={{flexDirection: 'column', backgroundColor:  'rgba(33,158,188,0.2)', height: 150, borderRadius: 100, alignSelf: 'center', paddingHorizontal: 15, borderColor: '#219ebc'}}> 
            
            <View style={{alignItems: 'center'}}>
                <Badge style={{backgroundColor: '#effcff', height: 50, width: 50, marginTop: 20, borderRadius: 100, paddingTop: 10}}>
                    {icon}
                </Badge>
            </View>
            <View style={{marginBottom: 20, marginTop: 20}}>
                <Text style={{textAlign: 'center', color: '#219ebc', fontSize: textSize, fontStyle: 'italic'}}>{infoData}</Text>
            </View>
        </View>
    )
}