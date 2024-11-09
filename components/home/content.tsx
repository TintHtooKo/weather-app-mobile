import React from 'react'
import { Image, Text, View } from 'react-native'

const Content = () => {
  return (
    <View className=' items-center justify-center mb-6'>
      <Image 
      source={require('../../assets/storm.png')}
      style={{width: 200, height: 200}}
      />
      <View className=' relative'>
        <Text className=' text-9xl font-extrabold text-center'>
        26
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
