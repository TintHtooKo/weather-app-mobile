import { StatusBar } from 'expo-status-bar';
import { ImageBackground, Platform, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Header from '../components/home/header';
import InputBox from '../components/home/input-box';
import Content from '../components/home/content';
import Info from '../components/home/info';
import { useState,useEffect } from 'react';
import * as Location from 'expo-location'

type Location = {
  latitude: number,
  longitude: number
}

export type Weather = {
  current_weather  : {
    temperature : number,
    weathercode : 0
  },
  daily : {
    sunrise : string[],
    sunset  : string[],
    temperature_2m_max : number[],
    time  :string[],
    weathercode : number[]
  },
  latitude : number,
  longtitude : number
}



export default function Index() {
  const [location,setLocation] = useState<Location>({latitude: 25.276987,longitude: 55.296249})
  const [weatherInfo,setWeatherInfo] = useState<Weather>()
  const [city,setCity] = useState<string>('Dubai')

  useEffect(()=>{
    const getPermission = async() =>{
      const { status } = await Location.requestForegroundPermissionsAsync()
      if(status !== 'granted'){
        console.log('Permission Denied')
      }

      const currentLocation = await Location.getCurrentPositionAsync({})
      // console.log(currentLocation)
      setLocation({latitude: currentLocation.coords.latitude,longitude: currentLocation.coords.longitude})
    }

    const getWeatherInfo = async() =>{
      const weather_api = `https://api.open-meteo.com/v1/forecast?latitude=${location.latitude}&longitude=${location.longitude}&daily=weathercode,temperature_2m_max,sunrise,sunset,windspeed_10m_max&timezone=auto&current_weather=true`
      const response = await fetch(weather_api)
      const res_data = await response.json()
      setWeatherInfo(res_data)
      // console.log(res_data)
    }

    const getReverseGeocode = async()=>{
      const reverseGeocodeResponse = await Location.reverseGeocodeAsync({
        latitude : location.latitude,
        longitude : location.longitude
      })
      setCity(reverseGeocodeResponse[0].city!)
      // console.log(reverseGeocodeResponse)
    }

    getPermission();
    getWeatherInfo()
    getReverseGeocode()
    // console.log('weathrerinfo',weatherInfo)
  },[])

  return (
    // SafeAreaView ka ios pal effect phit tal
    // so android so padding top loh phox style write lite tr
    <SafeAreaView 
    className=' bg-white'
    style={{paddingTop: Platform.OS === "android" ? 24 : 0}}>
        <ImageBackground 
        source={require('../assets/bg.jpg')}
        className='w-full h-full'
        blurRadius={6}
        >
        <View className='px-8'>
            <Header cityname={city}/>
            <InputBox/>
            {
              weatherInfo && <Content weatherInfo={weatherInfo} />
            }
            <Info/>
            <Text className=' text-center text-secondaryDark text-sm my-10'>
              Weather App - THK
            </Text>
        </View>
        <StatusBar style='dark' />
        </ImageBackground>
    </SafeAreaView>
  );
}

