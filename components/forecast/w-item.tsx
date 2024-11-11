import React from 'react'
import { Text, View } from 'react-native'
import { Weather } from './w-list'
import Ionicons from '@expo/vector-icons/Ionicons';

type WitemProps = {
    w : Weather
}

const WeatherItem = ({w}:WitemProps) => {
    const {day,temp,weather} = w
  return (
    <View className=' flex-row items-center justify-between mb-4' style={{paddingBottom:10,borderBottomWidth:1,borderBottomColor:'rgba(0,0,0,0.1)'}}>
        <Text className=' flex-1 text-xl text-purple-950 font-bold'>
            {day}
        </Text>
        <View className=' flex-1 flex-row gap-3 items-center justify-start'>
            <Ionicons name="sunny-outline" size={30} color="black" />
            <Text className=' text-left text-lg font-semibold text-purpleDark'>{weather}</Text>
        </View>
        <Text className=' flex-1 text-2xl font-bold text-purpleDark' style={{textAlign:'right'}}>
            {temp}
        </Text>
    </View>
  )
}

export default WeatherItem
