import $ from 'jquery';

// fetchWeather is an ASYNC operation. The dispatcher will NOT wait for it.
// This is why everyone seems to badmouth javascript.
// Luckily redux middleware can rescue us.
// Redux middleware (redux-promise) has to be added when the store is created.

var FetchWeather = function(){
    console.log("Fetch weather action in progress...")
    const weatherUrl = 'http://api.openweathermap.org/data/2.5/weather?units=imperial&zip=30324&appid=e312dbeb8840e51f92334498a261ca1d'
    const thePromise = $.getJSON(weatherUrl);
    // $.getJSON(weatherUrl, (weatherData)=>{
        console.log(thePromise)
        return {
            type: 'GET_WEATHER',
            payload: thePromise
        }
    // })
}

export default FetchWeather;