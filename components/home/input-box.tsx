import React from 'react'
import { Text, TextInput, View } from 'react-native'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Theme } from '../../theme';

const InputBox = () => {
  return (
    <View className=' relative'>
      <TextInput 
      placeholder=' City Name' 
      className=' bg-white shadow rounded-3xl ps-14 p-4 mb-4 placeholder:font-bold placeholder:text-secondaryDark'/>
      <MaterialCommunityIcons
      className=' absolute top-5 left-4' 
      name="cloud-search-outline" size={24} color={Theme.secondaryDark} />
    </View>
  )
}

export default InputBox
