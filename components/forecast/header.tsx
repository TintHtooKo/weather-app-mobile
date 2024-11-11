import React from 'react'
import { Pressable, Text, View } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';
import { Link } from 'expo-router';
import { Theme } from '../../theme';
import AntDesign from '@expo/vector-icons/AntDesign';

const Header = () => {
  return (
    <View className=' flex-row justify-between items-center mt-6 mb-6'>
      <Pressable hitSlop={20}>
        <Link href={'/'} asChild>
        <AntDesign name="arrowleft" size={24} color="black" />
        </Link>
      </Pressable>

      <View className=' flex-row items-center'>
      <Ionicons name="calendar-clear" size={24} color={Theme.purpleDark} />
      <Text className=' text-2xl font-bold ms-2'>7 Days</Text>
      </View>

      <Pressable hitSlop={20}>
        <Link href={'/qrcode'} asChild>
        <Ionicons name="qr-code" size={28} color="black" />
        </Link>
      </Pressable>
    </View>
  )
}

export default Header
