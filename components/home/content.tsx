import React from 'react'
import { Image, Text, View } from 'react-native'
import { Weather } from '../../app'

type ContentProps = {
  weatherInfo : Weather
}


const Content = ({weatherInfo}:ContentProps) => {
  return (
    <View className=' items-center justify-center mb-6'>
      <Image 
      source={require('../../assets/storm.png')}
      style={{width: 200, height: 200}}
      />
      <View className=' relative'>
        <Text className=' text-9xl font-extrabold text-center'>
        {weatherInfo.current_weather.temperature.toFixed()}
        </Text>
        <Text className=' text-8xl absolute bottom-20 left-44'>°</Text>
        <Text className=' text-4xl font-medium text-secondaryDark'>
            Thunderstorm
        </Text>
      </View>
      
    </View>
  )
}

export default Content
