import os
from dotenv import load_dotenv
load_dotenv()
from flask import Flask
from flask_cors import CORS
import requests

WEATHER_API_KEY = os.getenv('WEATHER_API_KEY')
endpoint = 'https://api.openweathermap.org/data/2.5'

app = Flask(__name__)
CORS(app)

@app.route("/api/weather/<zip>")
def getWeather(zip):
    weather = requests.get(f'{endpoint}/weather', {
        "appid": WEATHER_API_KEY,
        "zip": zip,
        "units": "imperial"
    })
    return weather.json()

@app.route("/api/forecast/<zip>")
def getForecast(zip):
    forecast = requests.get(f'{endpoint}/forecast', {
        "appid": WEATHER_API_KEY,
        "zip": zip,
        "units": "imperial",
        "cnt": 5
    })
    return forecast.json()

if __name__ == '__main__':
    app.run()