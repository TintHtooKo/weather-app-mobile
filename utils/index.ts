export const WEATHER_COLLECTION = [
    {
        codes : [0],
        label : "Sunny",
        image : require("../assets/sun.png")
    },
    {
        codes : [1,2,3,45,48],
        label : "Cloudy",
        image : require('../assets/cloudy.png')
    },
    {
        codes : [51,53,55,56,57,61,63,65,66,67,80,81,82],
        label : "Rainy",
        image : require('../assets/rain.png')
    },
    {
        codes : [71,73,75,77],
        label : "Snow",
        image : require('../assets/snow.png')
    },
    {
        codes : [96,99],
        label : "Thunderstorm",
        image : require('../assets/storm.png')
    }
]

export const getWeatherInfoByCode = (code:number) =>{
    return WEATHER_COLLECTION.find(weather=>weather.codes?.includes(code))
}

export const getTimeOnly = (date: string | undefined): string => {
    if (!date) return 'Invalid date'; // Handle undefined input
    const parts = date.split('T');
    return parts[1] || 'Invalid format'; // Handle formatting issues
  };

export const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
  