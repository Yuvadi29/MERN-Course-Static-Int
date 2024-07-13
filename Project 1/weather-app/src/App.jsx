import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
  const [input, setInput] = useState("");
  const [weatherData, setWeatherData] = useState();
  const [submitted, setSubmitted] = useState(false);

  const API_KEY = '1b242efea8e02a5806fe42998e221101';

  const BASE_URL = `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${API_KEY}`;

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const fetch = await axios.get(BASE_URL);
      console.log(fetch.data);
      setWeatherData(fetch.data);
      setSubmitted(true);
    } catch (error) {
      console.log("Error Fetching Data: ", error);
    }
  };

  const formatTime = (time) => {
    const date = new Date(time * 1000);
    const options = {
      hour: 'numeric',
      minute: 'numeric'
    };
    return date.toLocaleTimeString([], options);
  };


  return (
    // <>
    //   {/* <h1 className='text-white bg-blue-950 mt-4'>Hello World</h1> */}
    // </>
    <div className="max-w-md mx-auto mt-8 rounded-lg overflow-hidden shadow-lg bg-gray-100">
      {/* Search Box */}
      <div className="flex items-center bg-white border-b border-gray-200 p-2">
        <input
          type="text"
          className="flex-1 appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
          placeholder="Enter City Name"
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => fetchData()}
        >
          Submit
        </button>
      </div>

      {/* Weather Details Card */}
      {submitted ? (
        weatherData && (
          <div className="p-4">
            <div className="text-gray-800 font-bold text-xl mb-2">Weather Details</div> 

            <div className="border border-gray-300 p-4 rounded-lg bg-white">
              <p className="mb-4"><span className="font-bold">Coordinates:</span> Latitude={weatherData?.coord?.lat}, Longitude={weatherData?.coord?.lon}</p>
              <p className="mb-2"><span className="font-bold">Temperature:</span> {Math.round(weatherData?.main?.temp - 273)} °C</p>
              <p className="mb-2"><span className="font-bold">Pressure:</span> {weatherData?.main?.pressure} Pa</p>
              <p className="mb-2"><span className="font-bold">Humidity:</span> {weatherData?.main?.humidity} %</p>

              <div className="flex justify-between">
                <p className="mb-2"><span className="font-bold">Wind Speed:</span> {weatherData?.wind?.speed} km/h</p>
                <p className="mb-2"><span className="font-bold">Sunrise:</span> {formatTime(weatherData?.sys?.sunrise)}</p>
                <p className="mb-2"><span className="font-bold">Sunset:</span> {formatTime(weatherData?.sys?.sunset)}</p>

              </div>
            </div>
          </div>
        )
      ) : null}
    </div>
    // {<h1>Hi</h1>}
  )
}

export default App;
