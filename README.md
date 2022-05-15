# Weather Forecast app

> This app is a fullstack app build using React Frontend and Express Backend.

## Quick Guide

First get api key from [OpenWeatherMap](https://openweathermap.org/)

Later, clone this project

```bash
git clone https://github.com/priyaraj7/weather-forecast.git
```

move inside the directory

```bash
cd weather-forecast
```

next move into the server and install dependencies and start the server

```bash
cd server
npm install
node index.js
```

Create a `.env` file and enter your api-key. You can refer `.env-example` file

Open another terminal then cd into the client, install dependencies and start the server

```bash
cd client
npm install
npm start
```

Navigate to `http://localhost:3000/` and enter the city name. You will get the one day weather forecast of the city

![screenshot](./weather.png)

Note:
If you would like to run the backend Express server and the react server at the same time use the following command in server side terminal:

```bash
# Run the client & server with concurrently
npm run dev
```

Server runs on http://localhost:5000 and client on http://localhost:3000
