import { useEffect, useState } from "react";
import CurrentWeather from "./components/CurrentWeather";
import Header from "./components/Header";
import HourlyWeather from "./components/HourlyWeather";
import { FormattedData, HourlyData } from "./types/types";
import {
  FormatCurrentData,
  getCurrentWeather,
  getHourlyData,
} from "./api/weatherApi";
import { HiMagnifyingGlass } from "react-icons/hi2";

export default function App() {
  const [city, setCity] = useState<string>("hiroshima");
  const [currentWeather, setCurrentWeather] = useState<FormattedData | null>();
  const [hourlyWeather, setHourlyWeather] = useState<HourlyData | null>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getCurrentWeather(city);
        setCurrentWeather(FormatCurrentData(data));
      } catch (error) {
        console.error(error, "Failed to fetch weather data.");
      }
    };

    fetchData();
  }, [city]);

  useEffect(() => {
    const fetchHourlyData = async () => {
      try {
        const data = await getHourlyData(city);

        setHourlyWeather(data);
      } catch (error) {
        console.error(error, "Failed to fetch hourly weather data.");
      }
    };

    fetchHourlyData();
  }, [city]);

  return (
    <>
      <Header />
      <div className="p-4 max-w-[1440px]">
        <section
          id="inputForm"
          className="flex justify-between w-full max-w-full"
        >
          <div className="searchForm relative flex-grow mr-4">
            <form
              action=""
              className="searchBox"
              onSubmit={(e) => {
                e.preventDefault();
                const input: HTMLInputElement | null =
                  e.currentTarget.querySelector("#searchCities");
                setCity(input?.value || "hiroshima");
                input!.value = "";
              }}
            >
              <div className="icon-position relative">
                <input
                  type="text"
                  id="searchCities"
                  placeholder=" Location "
                  className="w-full h-10 rounded-lg shadow-sm border border-gray-300 pl-4 pr-10 focus:outline-none focus:ring-2 focus:ring-[#721328] focus:border-transparent"
                />
                <HiMagnifyingGlass className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              </div>
            </form>
          </div>
        </section>

        {currentWeather && <CurrentWeather data={currentWeather} />}
        {hourlyWeather && <HourlyWeather data={hourlyWeather} />}
      </div>
    </>
  );
}
