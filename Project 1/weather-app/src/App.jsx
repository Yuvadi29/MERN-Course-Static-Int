import React from 'react';

const App = () => {

  const API_KEY = '1b242efea8e02a5806fe42998e221101';

  const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}'

  // Assuming these are dynamic data placeholders
  const coordinates = {
    latitude: '40.7128',
    longitude: '-74.0060'
  };
  const temperature = '25°C';
  const pressure = '1013 hPa';
  const humidity = '50%';
  const windSpeed = '10 km/h';
  const sunrise = '5:30 AM';
  const sunset = '7:00 PM';

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
        />
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Submit
        </button>
      </div>

      {/* Weather Details Card */}
      <div className="p-4">
        <div className="text-gray-800 font-bold text-xl mb-2">Weather Details</div>

        <div className="border border-gray-300 p-4 rounded-lg bg-white">
          <p className="mb-4"><span className="font-bold">Coordinates:</span> Latitude={coordinates.latitude}, Longitude={coordinates.longitude}</p>
          <p className="mb-2"><span className="font-bold">Temperature:</span> {temperature}</p>
          <p className="mb-2"><span className="font-bold">Pressure:</span> {pressure}</p>
          <p className="mb-2"><span className="font-bold">Humidity:</span> {humidity}</p>

          <div className="flex justify-between">
            <p className="mb-2"><span className="font-bold">Wind Speed:</span> {windSpeed}</p>
            <p className="mb-2"><span className="font-bold">Sunrise:</span> {sunrise}</p>
            <p className="mb-2"><span className="font-bold">Sunset:</span> {sunset}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;
