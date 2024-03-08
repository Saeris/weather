export interface Weather {
  clouds: {
    /** Cloudiness, % */
    all: number;
  };
  coord: {
    /** Latitude of the location */
    lat: number;
    /** Longitude of the location */
    lon: number;
  };
  /** Time of data calculation, unix, UTC */
  dt: number;
  /** City ID */
  id: number;
  main: {
    /** Temperature. This temperature parameter accounts for the human perception of weather. Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit */
    feels_like: number;
    /** Humidity, % */
    humidity: number;
    /** Atmospheric pressure on the sea level, hPa */
    pressure: number;
    /** Temperature. Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit */
    temp: number;
    /** Maximum temperature at the moment. */
    temp_max: number;
    /** Minimum temperature at the moment. */
    temp_min: number;
  };
  /** City name */
  name: string;
  rain?: {
    /** Rain volume for the last 1 hour, mm. */
    "1h"?: number;
    /** Rain volume for the last 3 hours, mm. */
    "3h"?: number;
  };
  snow?: {
    /** Snow volume for the last 1 hour, mm. */
    "1h"?: number;
    /** Snow volume for the last 3 hours, mm. */
    "3h"?: number;
  };
  sys: {
    /** Country code */
    country: string;
    /** Sunrise time, unix, UTC */
    sunrise: number;
    /** Sunset time, unix, UTC */
    sunset: number;
  };
  /** Shift in seconds from UTC */
  timezone: number;
  /** Visibility, meter. The maximum value of the visibility is 10 km */
  visibility: number;
  weather: [
    {
      /** Weather condition within the group. */
      description: string;
      /** Weather icon id */
      icon: string;
      /** Weather condition id */
      id: number;
      /** Group of weather parameters (Rain, Snow, Clouds etc.) */
      main: string;
    }
  ];
  wind: {
    /** Wind direction, degrees (meteorological) */
    deg: number;
    /** Wind gust. Unit Default: meter/sec, Metric: meter/sec, Imperial: miles/hour */
    gust: number;
    /** Wind speed. Unit Default: meter/sec, Metric: meter/sec, Imperial: miles/hour */
    speed: number;
  };
}

export interface Forecast {
  /** A number of timestamps returned in the API response */
  cnt: number;
  list: Array<{
    /** Time of data forecasted, unix, UTC */
    dt: number;
    main: {
      /** Temperature. Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit */
      temp: number;
      /** Temperature. This temperature parameter accounts for the human perception of weather. */
      feels_like: number;
      /** Maximum temperature at the moment. */
      temp_max: number;
      /** Minimum temperature at the moment. */
      temp_min: number;
      /** Atmospheric pressure on the sea level, hPa */
      pressure: number;
      /** Atmospheric pressure on the sea level, hPa */
      sea_level: number;
      /** Atmospheric pressure on the sea level, hPa */
      grnd_level: number;
      /** Humidity, % */
      humidity: number;
    };
    weather: {
      /** Weather condition within the group. */
      description: string;
      /** Weather icon id */
      icon: string;
      /** Weather condition id */
      id: number;
      /** Group of weather parameters (Rain, Snow, Clouds etc.) */
      main: string;
    };
    clouds: {
      /** Cloudiness, % */
      all: number;
    };
    wind: {
      /** Wind direction, degrees (meteorological) */
      deg: number;
      /** Wind gust. Unit Default: meter/sec, Metric: meter/sec, Imperial: miles/hour */
      gust: number;
      /** Wind speed. Unit Default: meter/sec, Metric: meter/sec, Imperial: miles/hour */
      speed: number;
    };
    /** Visibility, meter. The maximum value of the visibility is 10 km */
    visibility: number;
    /** Probability of precipitation. */
    pop: number;
    rain?: {
      /** Rain volume for the last 3 hours, mm. */
      "3h"?: number;
    };
    snow?: {
      /** Snow volume for the last 3 hours, mm. */
      "3h"?: number;
    };
    sys: {
      /** Part of the day (n - night, d - day) */
      pod: "d" | "n";
    };
    /** Time of data forecasted, ISO, UTC */
    dt_txt: string;
  }>;
  city: {
    /** City ID */
    id: string;
    /** City name */
    name: string;
    coord: {
      /** Latitude of the location */
      lat: number;
      /** Longitude of the location */
      lon: number;
    };
    /** Country code */
    country: string;
    /** City population */
    population: number;
    /** Shift in seconds from UTC */
    timezone: number;
    /** Sunrise time, unix, UTC */
    sunrise: number;
    /** Sunset time, unix, UTC */
    sunset: number;
  };
}
