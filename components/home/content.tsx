import React, { useEffect, useState } from 'react'
import { Image, Text, View } from 'react-native'
import { Weather } from '../../app'
import { getWeatherInfoByCode } from '../../utils'
import { useWeatherStore } from '../../store/weather-store'

export type WeatherDetail = {
  codes : number[],
  label : string,
  image : string
}

const Content = () => {
  const current_weather = useWeatherStore(state=>state.current_weather)
  const [weatherDetails,setWeatherDetails] = useState<WeatherDetail>()
  useEffect(()=>{
    setWeatherDetails(getWeatherInfoByCode(current_weather.weathercode))
  },[weatherDetails])
  return (
    <View className=' items-center justify-center mb-6'>
      <Image 
      source={weatherDetails?.image}
      style={{width: 200, height: 200}}
      />
      <View className=' relative'>
        <Text className=' text-9xl font-extrabold text-center'>
        {current_weather.temperature.toFixed()}
        </Text>
        <Text className=' text-8xl absolute bottom-20 left-44'>°</Text>
        <Text className=' text-4xl font-medium text-secondaryDark'>
            {weatherDetails?.label}
        </Text>
      </View>
      
    </View>
  )

}

export default Content
