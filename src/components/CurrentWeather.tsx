import { useEffect, useState } from "react";
import { HiMagnifyingGlass } from "react-icons/hi2";
import {
  FormatCurrentData,
  getCurrentWeather,
} from "../services/weatherService";
import { CurrentData, FormattedData } from "../types/types";

export default function CurrentWeather() {
  const [city, setCity] = useState("hiroshima");
  const [currentWeatherData, setCurrentWeatherData] =
    useState<FormattedData | null>(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const currentWeather: CurrentData = await getCurrentWeather(city);
        const formattedData = FormatCurrentData(currentWeather);
        setCurrentWeatherData(formattedData);
      } catch (error) {
        console.error("Error", error);
      }
    };
    fetchWeather();
  }, [city]);

  return (
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
        {/* condition: switch lang */}
        <select
          name="lang"
          id="lang"
          className="h-10 rounded-lg border border-gray-300 px-2 focus:outline-none focus:ring-2 focus:ring-[#721328] focus:border-transparent capitalize"
        >
          <option value="ja" selected>
            日本語
          </option>
          <option value="en">English</option>
        </select>
      </section>

      <section
        id="heroContents"
        className="flex justify-between items-center mt-8"
      >
        <div className="currentWeather w-[55%] mr-4 flex flex-col justify-center items-center">
          <h2 className="text-2xl font-bold text-center">
            {currentWeatherData?.cityName}
          </h2>

          <div
            id="weatherImgDiv"
            className="bg-[#a6cfd5] rounded-lg mt-8 text-center"
          >
            <img
              src={currentWeatherData?.iconUrl}
              alt={currentWeatherData?.description}
              className="weatherImg"
              width="160"
            />
          </div>
        </div>

        <div id="currentTemp" className="w-[45%]">
          <h1 className="text-2xl font-bold text-center">今の気温</h1>
          <div className="currentTemFlex w-44 text-7xl font-bold flex justify-center items-center mt-10">
            <p className="currentTempNum">{currentWeatherData?.currentTemp}</p>
            <p className="currentTempSym">˚C</p>
          </div>
        </div>
      </section>

      <section id="dogWalkingForecast" className="mt-8 flex items-start">
        <div className="walkingDogImg mr-4 w-[45%]">
          <img
            src="images/stay-1.png"
            alt="a lazy dog"
            className="rounded-l-2xl w-full w-max-[600px] h-52 object-cover object-left-top"
          />
        </div>
        {/* condition: if a temperature is lower than 26, display 「ばあちゃん！散歩行こ！」  */}
        <ul className="walkingCard speech-bubble relative bg-[#ffdde5] p-4 rounded-lg w-[55%] h-[160px]">
          <li>
            <p className="cardText absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xl text-center w-full ">
              行かん...
            </p>
          </li>
          <div className="absolute w-4 h-4 bg-[#ffdde5] transform rotate-45 -left-2 top-1/2 -translate-y-1/2"></div>
        </ul>
      </section>
    </div>
  );
}
