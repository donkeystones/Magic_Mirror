import { useEffect, useState } from "react"
import { getMeterologicalForecast } from "../assets/api_calls"
import "./weather.css";
import { WiCloud, WiDayCloudyHigh, WiDayRain, WiDayRainMix, WiDaySleet, WiDaySnow, WiDaySunny, WiFog, WiRain, WiRainMix, WiSleet, WiSnow, WiThunderstorm } from "./weather-icons";


interface WeahterData {
    time: string;
    symbol: string;
    temp: number
}

const parseWeatherData = (rawData: any): Array<WeahterData> => {
    let weatherdata: Array<WeahterData> = [];
    for(let i = 0; i < 5; i++){
        let time = rawData.timeSeries[i].validTime; //Get time
        let symbol = rawData.timeSeries[i].parameters[18].values[0]; //Get symbol id
        let temp = rawData.timeSeries[i].parameters[11].values[0]; //Get temperature in Celsius
        weatherdata.push({time: time, symbol: symbol, temp: temp}); //Add to array
    }
    return weatherdata;
}

const Weather = () => {

    const [weatherData, setWeatherData] = useState<Array<WeahterData>>([]);

    useEffect(() => {
        
        const fetchWeatherData = async () => {
            const data = await getMeterologicalForecast();
            const parsedData = parseWeatherData(data);
            setWeatherData(parsedData);
        }
        const interval = setInterval(() => {
            fetchWeatherData().catch(console.error)
        }, 900000);
        fetchWeatherData().catch(console.error);

        return () => clearInterval(interval);
    },[])

    return <div className="weather">
                <ul>
                    {weatherData.length === 0 ? "" : weatherData.map(data => <li className="weatherIconAndTime" key={data.time}>{GetWeatherIcons(parseInt(data.symbol))}<h1>{new Date(data.time).getHours()}:00, {data.temp}°C</h1></li>)}
                </ul>
            </div>
}

const GetWeatherIcons = (symbolId: number) => {
    switch(symbolId){
        case 1:
            return <WiDaySunny width="5em" height="5em"/>;
        case 2:
            return <WiDayCloudyHigh width="5em" height="5em"/>
        case 3:
            return <WiDayCloudyHigh width="5em" height="5em"/>
        case 4:
            return <WiDayCloudyHigh width="5em" height="5em"/>
        case 5: 
            return <WiCloud width="5em" height="5em"/>
        case 6: 
            return <WiCloud width="5em" height="5em"/>
        case 7: 
            return <WiFog width="5em" height="5em"/>
        case 8:
            return <WiDayRainMix width="5em" height="5em"/>
        case 9:
            return <WiDayRainMix width="5em" height="5em"/>
        case 10:
            return <WiRainMix width="5em" height="5em" />
        case 11:
            return <WiThunderstorm width="5em" height="5em" />
        case 12:
            return <WiDaySleet width="5em" height="5em" />
        case 13:
            return <WiDaySleet width="5em" height="5em" />
        case 14:
            return <WiSleet width="5em" height="5em" />
        case 15:
            return <WiDaySnow width="5em" height="5em" />
        case 16:
            return <WiDaySnow width="5em" height="5em" />
        case 17: 
            return <WiSnow width="5em" height="5em" />  
        case 18:
            return <WiDayRain width="5em" height="5em" />  
        case 19:
            return <WiDayRain width="5em" height="5em" />  
        case 20:
            return <WiRain width="5em" height="5em" />  
        case 21:
            return <WiThunderstorm width="5em" height="5em" />
        case 22:
            return <WiDaySleet width="5em" height="5em" />
        case 23:
            return <WiDaySleet width="5em" height="5em" />
        case 24:
            return <WiSleet width="5em" height="5em" />
        case 25:
            return <WiDaySnow width="5em" height="5em" />
        case 26:
            return <WiDaySnow width="5em" height="5em" />
        case 27: 
            return <WiSnow width="5em" height="5em" /> 
        default:
            return <WiDaySunny width="5em" height="5em"/>;
    }
}

export default Weather;