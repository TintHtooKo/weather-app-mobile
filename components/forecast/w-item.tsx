import React from 'react'
import { Image, Text, View } from 'react-native'
import { Weather } from './w-list'
import Ionicons from '@expo/vector-icons/Ionicons';

type WitemProps = {
    w : Weather
}

const WeatherItem = ({w}:WitemProps) => {
    const {day,temp,weather,wImage} = w
  return (
    <View className=' flex-row items-center justify-between mb-4' style={{paddingBottom:10,borderBottomWidth:1,borderBottomColor:'rgba(0,0,0,0.1)'}}>
        <Text className=' flex-1 text-xl text-purple-950 font-bold'>
            {day}
        </Text>
        <View className=' flex-1 flex-row gap-3 items-center justify-start'>
            <Image source={wImage} className=' w-10 h-10'/>
            {/* <Ionicons name="sunny-outline" size={30} color="black" /> */}
            <Text className=' text-left text-lg font-semibold text-purpleDark'>{weather}</Text>
        </View>
        <Text className=' flex-1 text-2xl font-bold text-purpleDark' style={{textAlign:'right'}}>
            {temp.toFixed()}°
        </Text>
    </View>
  )
}

export default WeatherItem
