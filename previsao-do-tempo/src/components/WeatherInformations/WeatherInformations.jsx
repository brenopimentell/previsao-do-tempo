import './WeatherInformations.css'

function WeatherInformations({ weather }) {

    console.log(weather)

    return (
        <div className='weather-container'>
            <h2>{weather.name}</h2>
            <div className='weather-info'>
                <p>
                    <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`} />
                </p>
                <p className='temperature'>{Math.round(weather.main.temp)}°C</p>
            </div>

            <p className='description'>{weather.weather[0].description}</p>


            <div className='details'>
                <p>Sensação térmica: {Math.round(weather.main.feels_like)}°C</p>
                <p>Umidade: {weather.main.humidity}%</p>
                <p className='paragraph-wind'>Vento: {Math.round(weather.wind.speed)}km/h</p>
            </div>



        </div>


    )

}

export default WeatherInformations
