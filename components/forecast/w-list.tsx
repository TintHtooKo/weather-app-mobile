import React, { useState } from 'react'
import { FlatList, Text, View } from 'react-native'
import WeatherItem from './w-item'


export type Weather = {
    day : string,
    weather : string,
    temp : string
}
const DummyWeathers : Weather[] = [
    {
        day : 'Mon',
        weather : 'Cloudy',
        temp : '26°'
    },
    {
        day : 'Tue',
        weather : 'Sunny',
        temp : '26°'
    },
    {
        day : 'Wed',
        weather : 'Sunny',
        temp : '26°'
    },
    {
        day : 'Thu',
        weather : 'Cloudy',
        temp : '26°'
    },
    {
        day : 'Fri',
        weather : 'Cloudy',
        temp : '26°'
    },
    {
        day : 'Sat',
        weather : 'Rainy',
        temp : '26°'
    },
    {
        day : 'Sun',
        weather : 'Cloudy',
        temp : '26°'
    }
]
const WList = () => {
    const [forecastData,setForecastData] = useState(DummyWeathers)
  return (
    <FlatList 
    data={forecastData}
    renderItem={({item})=><WeatherItem w={item}/>} 
    keyExtractor={(item)=>item.day}/>
  )
}

export default WList
