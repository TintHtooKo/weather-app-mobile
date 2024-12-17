import React, { useEffect, useState } from 'react'
import { Image, Text, View } from 'react-native'
import { Weather } from '../../app'
import { getWeatherInfoByCode } from '../../utils'

type ContentProps = {
  weatherInfo : Weather
}

type WeatherDetail = {
  codes : number[],
  label : string,
  image : string
}

const Content = ({weatherInfo}:ContentProps) => {
  const [weatherDetails,setWeatherDetails] = useState<WeatherDetail>()
  useEffect(()=>{
    setWeatherDetails(getWeatherInfoByCode(weatherInfo.current_weather.weathercode))
  },[weatherInfo])
  return (
    <View className=' items-center justify-center mb-6'>
      <Image 
      source={weatherDetails?.image}
      style={{width: 200, height: 200}}
      />
      <View className=' relative'>
        <Text className=' text-9xl font-extrabold text-center'>
        {weatherInfo.current_weather.temperature.toFixed()}
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
