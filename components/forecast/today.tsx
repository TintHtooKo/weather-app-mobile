import React, { useEffect, useState } from 'react'
import { Image, Text, View } from 'react-native'
import { useWeatherStore } from '../../store/weather-store'
import { WeatherDetail } from '../home/content'
import { getWeatherInfoByCode } from '../../utils'

const Today = () => {
  const weatherCode = useWeatherStore(state=>state.current_weather).weathercode
  const temperature = useWeatherStore(state=>state.current_weather).temperature
  const [weatherDetails,setWeatherDetails] = useState<WeatherDetail>()
    useEffect(()=>{
      setWeatherDetails(getWeatherInfoByCode(weatherCode))
    },[weatherDetails])
  return (
    <View className=' flex-row mb-2 justify-between'>
      <Image source={weatherDetails?.image} className=' w-56 h-52'/>
      <View>
        <Text className=' text-xl font-bold mb-2'>Today</Text>
        <Text className=' text-8xl font-bold text-purpleDark'>{temperature.toFixed()}°</Text>
        <Text className=' text-xl text-secondaryDark font-bold -mt-3'>{weatherDetails?.label}</Text>
      </View>
    </View>
  )
}

export default Today
