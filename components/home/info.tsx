import React from 'react'
import { Text, View } from 'react-native'
import Feather from '@expo/vector-icons/Feather';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { Theme } from '../../theme';

const Info = () => {
  return (
    <View className=' flex-row items-center justify-center my-2 gap-3 mx-auto'>
      <View className=' flex-1 items-center shadow bg-white rounded-3xl p-4'>
      <Feather name="sunrise" size={24} color="#f7b92a" />
      <Text className=' text-purpleDark font-bold text-lg'>
        6:00 AM
      </Text>
      <Text className=' text-lg text-secondaryDark font-bold'>
        Sunrise
      </Text>
      </View>

      <View className=' flex-1 items-center shadow bg-white rounded-3xl p-4'>
      <FontAwesome6 name="droplet" size={24} color={Theme.skyBlue} />
      <Text className=' text-purpleDark font-bold text-lg'>
        84%
      </Text>
      <Text className=' text-lg text-secondaryDark font-bold'>
        Rain
      </Text>
      </View>

      <View className=' flex-1 items-center shadow bg-white rounded-3xl p-4'>
      <Feather name="sunset" size={24} color="#f7b92a" />
      <Text className=' text-purpleDark font-bold text-lg'>
        5:30 PM
      </Text>
      <Text className=' text-lg text-secondaryDark font-bold'>
        Sunset
      </Text>
      </View>
    </View>
  )
}

export default Info
