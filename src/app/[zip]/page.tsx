import React from "react";
import type { Weather, Forecast } from "./types";
import { Search } from "../../components/Search";
import styles from "./styles.module.css";

const scheme = process.env.Production ? `https://` : `http://`;
const baseURL = process.env.NEXT_PUBLIC_VERCEL_URL!;

const conditions = {
  /** clear sky */
  "01": String.fromCodePoint(0x2600, 0xfe0f),
  /** few clouds: 11-25% */
  "02": String.fromCodePoint(0x1f324, 0xfe0f),
  /** scattered clouds: 25-50% */
  "03": String.fromCodePoint(0x26c5),
  /** broken clouds: 51-84% */
  "04": String.fromCodePoint(0x2601, 0xfe0f),
  /** shower rain */
  "09": String.fromCodePoint(0x1f327, 0xfe0f),
  /** rain */
  10: String.fromCodePoint(0x1f326, 0xfe0f),
  /** thunderstorm */
  11: String.fromCodePoint(0x26c8, 0xfe0f),
  /** snow */
  13: String.fromCodePoint(0x2744, 0xfe0f),
  /** mist */
  50: String.fromCodePoint(0x1f324, 0xfe0f)
} as const;

const getWeather = async (zip: string): Promise<Weather> => {
  const url = `${scheme}${baseURL}/api/weather/${zip}`;
  const res = await fetch(url, {
    cache: `no-cache`
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch weather data`, {
      cause: url
    });
  }

  return res.json();
};

const getForecast = async (zip: string): Promise<Forecast> => {
  const url = `${scheme}${baseURL}/api/forecast/${zip}`;
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error(`Failed to fetch forecast data`, {
      cause: url
    });
  }

  return res.json();
};

const timestampToDate = (time: number, offset: number): Date =>
  new Date((time + offset) * 1000);

const getHour = (date: Date): string =>
  date.toLocaleString(`en-US`, {
    hour: `numeric`,
    hour12: true
  });

const Page = async ({
  params
}: {
  readonly params: { zip: string };
}): Promise<React.ReactElement> => {
  const weather = await getWeather(params.zip);
  const forecast = await getForecast(params.zip);
  const time = timestampToDate(weather.dt, weather.timezone).toLocaleString(
    `en-US`,
    {
      timeZone: `UTC`,
      weekday: `long`,
      month: `long`,
      day: `numeric`,
      hour: `numeric`,
      minute: `numeric`,
      hour12: true
    }
  );

  return (
    <>
      <section className={styles.details}>
        <Search />
        <div className={styles.location}>
          <h1>{weather.name}</h1>
          <span>{time}</span>
        </div>

        <article className={styles.temp}>
          <span>{conditions[weather.weather[0].icon.substring(0, 2)]}</span>
          <div>
            <h2>
              {Math.round(weather.main.temp)}
              <sup>°</sup>
              <sub>f</sub>
            </h2>
            {weather.weather[0].main}
          </div>
        </article>
      </section>
      <ul className={styles.forecast}>
        {forecast.list.map((period) => (
          <li key={period.dt_txt} className={styles.period}>
            <div>{getHour(timestampToDate(period.dt, weather.timezone))}</div>
            <div className="icon">
              {conditions[period.weather[0].icon.substring(0, 2)]}
            </div>
            <div>
              {Math.round(period.main.temp)}
              <span>
                <sup>°</sup>
                <sub>f</sub>
              </span>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Page;
