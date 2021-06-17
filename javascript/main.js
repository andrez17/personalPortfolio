// Foursquare API Info
const clientId = 'MWP0UKP00FKFGP5PGJTF3ZVZH5FZO5ZQ3LZ4VGWBGWBCQW3F';
const clientSecret = 'VDVGG3TGNHZPJMQLDKCDPYUB1IMPPJAOXFDF22G32QKKCOCZ';
const url = 'https://api.foursquare.com/v2/venues/explore?near=';

// OpenWeather Info
const openWeatherKey = '3e4db191413c41a373c3d3ed2840d8ff';
const weatherUrl = 'https://api.openweathermap.org/data/2.5/weather';

// Page Elements
const $input = $('#city');
const $submit = $('#button');
const $destination = $('.destination');
const $container = $('.container');
const $weatherDiv = $("#weather1");
const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// Ajax Functions
const getForecast = async () =>{
    const urlToFetch = `${weatherUrl}?q=${$input.val()}&appid=${openWeatherKey}`;
    try{
        const response = await fetch(urlToFetch);
        if(response.ok){
            const jsonResponse = response.json();
            return jsonResponse;
        }
    }catch(error){
        console.log(error);
    }
}

const kelvinToFahrenheit = k => ((k - 273.15) * 9 / 5 + 32).toFixed(0);

const createWeatherHTML = (currentDay) => {
    $destination.append(`<h2>${currentDay.name}</h2>`);
    return `<h2>${weekDays[(new Date()).getDay()]}</h2>
    <h2>Temperature: ${kelvinToFahrenheit(currentDay.main.temp)}&deg;F</h2>
    <h2>Condition: ${currentDay.weather[0].description}</h2>
    <img src="https://openweathermap.org/img/wn/${currentDay.weather[0].icon}@2x.png">`;
}


const renderForecast = (day) =>{
    console.log(day);
    let weatherContent = createWeatherHTML(day);
    $weatherDiv.append(weatherContent);
}

const executeSearch = () => {
    // $venueDivs.forEach(venue => venue.empty());
    $weatherDiv.empty();
    $destination.empty();
    $container.css("visibility", "visible");
    // getVenues()
    // .then(venues =>{
    //   renderVenues(venues);
    // })
    getForecast()
    .then(forecast =>{
      renderForecast(forecast);
    })
    return false;
  }
  
  $submit.click(executeSearch)

  const newStyle = () =>{
      let newColor = '';
      let newFont = '';
      let x = Math.floor(Math.random() * 7);

      switch(x){
        case 0:
            newColor = 'red';
            newFont = 'Times New Roman';
            break;
        case 1: 
            newColor = 'blue';
            newFont = 'Florence, cursive'; 
            break;
        case 2:
            newColor = 'yellow';
            newFont = 'Verdana';
            break; 
        case 3:
            newColor= 'purple';
            newFont = 'Courier New';
            break
        case 4:
            newColor = 'cyan';
            newFont = 'Georgia'; 
            break;
        case 5:
              newColor = 'maroon';
              newFont = 'Palatino';
              break;
        case 6: 
              newColor = 'lime';
              newFont = 'Impact';
              break;
        }
        var elem = document.getElementById('bannerLogo');
        elem.style.color = newColor;
        elem.style.fontFamily = newFont;
        document.querySelector('.banner').style.backgroundColor = 'white';
  }

  