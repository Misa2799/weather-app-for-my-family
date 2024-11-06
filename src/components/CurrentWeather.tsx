import { FormattedData } from "../types/types";

type DataProps = {
  data: FormattedData;
};

export default function CurrentWeather({ data }: DataProps) {
  return (
    <div className="p-4 max-w-[1440px]">
      <section
        id="heroContents"
        className="flex justify-between items-center mt-8"
      >
        <div className="currentWeather w-[55%] mr-4 flex flex-col justify-center items-center">
          <h2 className="text-2xl font-bold text-center">{data?.cityName}</h2>

          <div
            id="weatherImgDiv"
            className="bg-[#a6cfd5] rounded-lg mt-8 text-center"
          >
            <img
              src={data?.iconUrl}
              alt={data?.description}
              className="weatherImg"
              width="160"
            />
          </div>
        </div>

        <div id="currentTemp" className="w-[45%]">
          <h1 className="text-2xl font-bold text-center">今の気温</h1>
          <div className="currentTemFlex w-44 text-7xl font-bold flex justify-center items-center mt-10">
            <p className="currentTempNum">{data?.currentTemp}</p>
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
