import { useEffect, useState } from "react"
import { getMeterologicalForecast } from "../assets/api_calls"
import "./weather.css";


interface WeahterData {
    time: string;
    symbol: string;
    temp: number
}

const parseWeatherData = (rawData: any): Array<WeahterData> => {
    let weatherdata: Array<WeahterData> = [];
    for(let i = 0; i < 5; i++){
        let time = rawData.timeSeries[i].validTime;
        let symbol = rawData.timeSeries[i].parameters[18].values[0];
        let temp = rawData.timeSeries[i].parameters[10].values[0];
        weatherdata.push({time: time, symbol: symbol, temp: temp});
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

        fetchWeatherData().catch(console.error);
    },[])

    return <div className="weather">
                <ul>
                {weatherData.length === 0 ? "" : weatherData.map(data => <li>{data.temp}</li>)}
                </ul>
            </div>
}

export default Weather;