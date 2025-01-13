import './WeatherInformations5Days.css'

function WeatherInformations5Days({ weather5Days }) {

    console.log(weather5Days)


    let dailyForecast = {}

    for (let forecast of weather5Days.list) {
        const date = new Date(forecast.dt * 1000).toLocaleDateString()

        if (!dailyForecast[date]) {
            dailyForecast[date] = forecast
        }

    }

    const nextFiveDays = Object.values(dailyForecast).slice(1, 6)

    function converteDate(date) {
        const newDate = new Date(date.dt * 1000).toLocaleDateString('pt-br', { weekday: 'long', day: '2-digit' })

        return newDate
    }


    return (
        <div className='weather-container'>
            <h3>Previsão próximos 5 dias</h3>
            <div className='weather-list'>
                {nextFiveDays.map(forecastMap => (
                    <div key={forecastMap.dt} className='weather-item'>
                        <p className='forecastMap-day'>{converteDate(forecastMap)}</p>
                        <img src={`http://openweathermap.org/img/wn/${forecastMap.weather[0].icon}.png`} />
                        <p className='forecastMap-description'>{forecastMap.weather[0].description} </p>
                        <p>
                            {Math.round(forecastMap.main.temp_min)}°C min / {Math.round(forecastMap.main.temp_max)}°C max
                        </p>

                    </div>
                ))}
            </div>

        </div>


    )

}

export default WeatherInformations5Days