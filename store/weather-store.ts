import { create } from "zustand"

type CurrentWeather = {
    weatherCode : number,
    temperature : number
}

type DailyForecast = {
    sunrise : string[],
    sunset  : string[],
    temperature_2m_max : number[],
    time  :string[],
    weathercode : number[]
    windspeed_10m_max:number[]
}

type WeatherType = {
    current_weather  : {
        temperature : number,
        weathercode : number,
      },
      daily : {
        sunrise : string[],
        sunset  : string[],
        temperature_2m_max : number[],
        time  :string[],
        weathercode : number[],
        windspeed_10m_max:number[]
      },
      setCurrentWeather: (weather:CurrentWeather) => void,
      setDailyForecast : (forecast:DailyForecast)=> void
}

export const useWeatherStore = create<WeatherType>(set => ({
    current_weather : {
        temperature : 0,
        weathercode : 0
    },
    daily : {
        sunrise : [],
        sunset  : [],
        temperature_2m_max : [],
        time  :[],
        weathercode : [],
        windspeed_10m_max:[]
    },
    setCurrentWeather:(weather)=>set({
        current_weather : {
            temperature : weather.temperature,
            weathercode : weather.weatherCode
        }
    }),
    setDailyForecast : (forecast)=>set({
        daily : {
            sunrise : forecast.sunrise,
            sunset : forecast.sunset,
            temperature_2m_max:forecast.temperature_2m_max,
            time : forecast.time,
            weathercode : forecast.weathercode,
            windspeed_10m_max:forecast.windspeed_10m_max
        }
    })
}))