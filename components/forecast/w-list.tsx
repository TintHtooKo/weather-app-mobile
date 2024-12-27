import React, { useState } from 'react'
import { FlatList, ImageSourcePropType, ScrollView, Text, View } from 'react-native'
import WeatherItem from './w-item'
import { useWeatherStore } from '../../store/weather-store'
import { DAYS, getWeatherInfoByCode } from '../../utils'


export type Weather = {
    day : string,
    weather : string,
    temp : number,
    wImage : ImageSourcePropType
}

const WList = () => {
    const dailyForecast = useWeatherStore(state=>state.daily)
  return (
    <ScrollView>
        <View className='flex-1'>
        {
            dailyForecast.weathercode.map((code,index)=>{
                const temperature = dailyForecast.temperature_2m_max[index];
                const date = new Date(dailyForecast.time[index])
                const dayOfWeek = DAYS[date.getDay()]
                const condition = getWeatherInfoByCode(code)?.label
                const img = getWeatherInfoByCode(code)?.image
                const weatherData: Weather = {
                    day: dayOfWeek,
                    weather: condition || 'Unknown', 
                    temp: temperature,
                    wImage : img
                };

                return <WeatherItem key={index} w={weatherData} />;
            })
        }
    </View>
    </ScrollView>
  )
}

export default WList
