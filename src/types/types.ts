export type CurrentData = {
  weather: [
    {
      id: number;
      main: string;
      description: string;
      icon: string;
    }
  ];
  main: {
    temp: number;
  };
  sys: { sunset: number };
  dt: number;
  name: string;
  timezone: number;
};

export type WeatherData = {
  list: [
    {
      dt: number;
      main: {
        temp: number;
        feels_like: number;
        humidity: number;
      };
      weather: {
        id: number;
        main: string;
        description: string;
        icon: string;
      }[];
      pop: number;
      rain?: {
        "3h": number;
      };
      dt_txt: string;
    }
  ];
  city: {
    name: string;
    timezone: number;
  };
};

export type FormattedData = {
  cityName: string;
  currentTemp: number;
  hTime: number;
  setDateTime: Date;
  iconUrl: string;
  description: string;
};
