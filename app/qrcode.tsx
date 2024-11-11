import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { Image, ImageBackground, Platform, SafeAreaView, Text, View } from 'react-native'

const Qrcode = () => {
  return (
    <SafeAreaView 
    className=' bg-white'
    style={{paddingTop: Platform.OS === "android" ? 24 : 0}}>
        <ImageBackground 
        source={require('../assets/bg.jpg')}
        className='w-full h-full'
        blurRadius={6}
        >      
        <View className='px-8 items-center justify-center flex-1'>
            <View className=' items-center justify-center'>
                <Image 
                className=' w-60 h-60'
                source={require('../assets/officialWebsite.png')}/>
            </View>
            <Text className=' text-center text-secondaryDark text-sm'>
              Weather App - THK
            </Text>
        </View>
        <StatusBar style='dark' />
        </ImageBackground>
    </SafeAreaView>
  )
}

export default Qrcode
