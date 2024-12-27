import { StatusBar } from 'expo-status-bar';
import { Alert, ImageBackground, Platform, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Header from '../components/home/header';
import InputBox from '../components/home/input-box';
import Content from '../components/home/content';
import Info from '../components/home/info';
import { useState,useEffect } from 'react';
import * as Location from 'expo-location'
import { useWeatherStore } from '../store/weather-store';
import { getLocationByCity, getWeatherInfo } from '../utils/weather-api';

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
  const setCurrentWeather = useWeatherStore(state=>state.setCurrentWeather)
  const setDailyForecast = useWeatherStore(state=>state.setDailyForecast)
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
    getPermission();
    // console.log('weathrerinfo',weatherInfo)
  },[])

  const getWeather = async()=>{
    const weather = await getWeatherInfo(location.latitude,location.longitude)
    setCurrentWeather({
      temperature:weather.current_weather.temperature,
      weatherCode:weather.current_weather.weathercode
    })
    setDailyForecast({
      sunrise:weather.daily.sunrise,
      sunset:weather.daily.sunset,
      temperature_2m_max:weather.daily.temperature_2m_max,
      time:weather.daily.time,
      weathercode:weather.daily.weathercode,
      windspeed_10m_max:weather.daily.windspeed_10m_max
    })
  }

  const getReverseGeocode = async()=>{
    const reverseGeocodeResponse = await Location.reverseGeocodeAsync({
      latitude : location.latitude,
      longitude : location.longitude
    })

    setCity(reverseGeocodeResponse[0].city! || reverseGeocodeResponse[0].country!)
    // console.log(reverseGeocodeResponse)
  }

  const searchLocationByCity = async(city:string)=>{
    try {
      const {latitude,longitude} = await getLocationByCity(city)
      setLocation({latitude,longitude})
    } catch (error) {
      Alert.alert(error as string)
    }
  }

  useEffect(()=>{
    getWeather()
    getReverseGeocode()
  },[location])

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
            <InputBox searchLocationByCity={searchLocationByCity}/>
              <Content />
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

