import { CurrentData } from "../types/types";

export const getCurrentWeather = async (city: string) => {
  const forecastUrl: string = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${
    import.meta.env.VITE_API_KEY
  }`;

  const response = await fetch(forecastUrl);
  if (!response.ok) {
    throw new Error("Failed to fetch weather data");
  }

  const data = await response.json();
  console.log("data:", data);
  return data;
};

export const FormatCurrentData = (data: CurrentData) => {
  const cityName = data.name.toLocaleUpperCase();
  const currentTemp = Math.round(data.main.temp - 273.15);
  const hTime = (data.dt + data.timezone) * 1000;
  const setDateTime: Date = new Date(hTime);
  const iconCode = data.weather[0].icon;
  const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@4x.png`;
  const description = data.weather[0].description;

  return { cityName, currentTemp, hTime, setDateTime, iconUrl, description };
};
