import { HourlyData } from "../types/types";

type HourlyWeatherProps = {
  data: HourlyData;
};

const HourlyWeather: React.FC<HourlyWeatherProps> = ({ data }) => {
  const timezoneOffset = data.city.timezone / 3600;

  return (
    <section id="currentHourlyRange" className="mt-14 text-2xl">
      <div className="currentPop">
        <ul className="popInfo flex justify-between items-center text-center">
          {data.list.slice(0, 3).map((hourData, index) => {
            const dateTime = new Date(hourData.dt * 1000);
            const utcHour = dateTime.getUTCHours();
            let hour = Math.ceil(utcHour + timezoneOffset);

            if (hour < 0) hour += 24;
            else if (hour >= 24) hour -= 24;

            const iconUrl = `https://openweathermap.org/img/wn/${hourData.weather[0].icon}@4x.png`;
            return (
              <li
                className="hourlyPopContents bg-[#a6cfd5] rounded-md py-3 px-2"
                key={index}
              >
                <p className="hourlyPopHour">{`${hour}:00`}</p>
                <img
                  src={iconUrl}
                  alt={hourData.weather[0].description}
                  width={80}
                  height={80}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default HourlyWeather;
