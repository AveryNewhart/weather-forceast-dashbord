let searchButtonEl = document.getElementById("clickSearch");
let listSearchHistEl = document.getElementById("listSearchHistory");
let userInputCity = document.getElementById('city-name');
let userSearchEl = document.getElementById('searchedCity');
let cityTemp = document.getElementById('city-temp');
let cityWind = document.getElementById('city-wind');
let cityHumidity = document.getElementById('city-humidity');
let userSearchElValue = document.getElementById('searchedCity').value;

searchButtonEl.addEventListener('click', function() {
    let userSearchElValue = document.getElementById('searchedCity').value;

    userInputCity.textContent = userSearchElValue + '   ' + moment().format("dddd, MMM Do")

    fetch('https://api.openweathermap.org/data/2.5/forecast?q='+ userSearchElValue +'&units=imperial&appid=285f3aad6388025cc10ddacdf8329eaa')
    .then(function(response) {
        if(response.status === 404) {
            alert("Please input a valid city!")
        }
        return response.json();
    })

    .then(function(data) {
        let cityTempValue = data['list']['0']['main']['temp'];
        let cityWindValue = data['list']['0']['wind']['speed'];
        let cityHumidityValue = data['list']['0']['main']['humidity'];

            document.getElementById('top-img').src = 'https://openweathermap.org/img/wn/'+ data['list']['0']['weather'][0]['icon'] +'@2x.png';
            cityTemp.textContent = "Temp: " + cityTempValue + "°F";
            cityWind.textContent = "Wind: " + cityWindValue + "MPH";
            cityHumidity.textContent = "Humidity: " + cityHumidityValue + "%";

            document.getElementById('currentDate1').textContent = data['list']['0']['dt_txt'];
            document.getElementById('img1').src = 'https://openweathermap.org/img/wn/'+ data['list']['0']['weather'][0]['icon'] +'@2x.png'
            document.getElementById('day1Temp').textContent =  'Temp: ' + data['list']['0']['main']['temp'] + " °F";
            document.getElementById('day1Wind').textContent = 'Wind:' + data['list']['0']['wind']['speed'] + " MPH";
            document.getElementById('day1Humid').textContent = 'Humidity: ' + data['list']['0']['main']['humidity'] + " %";
            
            document.getElementById('currentDate2').textContent = data['list']['8']['dt_txt'];
            document.getElementById('img2').src = 'https://openweathermap.org/img/wn/'+ data['list']['8']['weather'][0]['icon'] +'@2x.png'
            document.getElementById('day2Temp').textContent =  'Temp: ' + data['list']['8']['main']['temp'] + " °F";
            document.getElementById('day2Wind').textContent = 'Wind:' + data['list']['8']['wind']['speed'] + " MPH";
            document.getElementById('day2Humid').textContent = 'Humidity: ' + data['list']['8']['main']['humidity'] + " %";

            document.getElementById('currentDate3').textContent = data['list']['16']['dt_txt'];
            document.getElementById('img3').src = 'https://openweathermap.org/img/wn/'+ data['list']['16']['weather'][0]['icon'] +'@2x.png'
            document.getElementById('day3Temp').textContent =  'Temp: ' + data['list']['16']['main']['temp'] + " °F";
            document.getElementById('day3Wind').textContent = 'Wind:' + data['list']['16']['wind']['speed'] + " MPH";
            document.getElementById('day3Humid').textContent = 'Humidity: ' + data['list']['16']['main']['humidity'] + " %";

            document.getElementById('currentDate4').textContent = data['list']['24']['dt_txt'];
            document.getElementById('img4').src = 'https://openweathermap.org/img/wn/'+ data['list']['24']['weather'][0]['icon'] +'@2x.png'
            document.getElementById('day4Temp').textContent =  'Temp: ' + data['list']['24']['main']['temp'] + " °F";
            document.getElementById('day4Wind').textContent = 'Wind:' + data['list']['24']['wind']['speed'] + " MPH";
            document.getElementById('day4Humid').textContent = 'Humidity: ' + data['list']['24']['main']['humidity'] + " %";

            document.getElementById('currentDate5').textContent = data['list']['32']['dt_txt'];
            document.getElementById('img5').src = 'https://openweathermap.org/img/wn/'+ data['list']['32']['weather'][0]['icon'] +'@2x.png'
            document.getElementById('day5Temp').textContent =  'Temp: ' + data['list']['32']['main']['temp'] + " °F";
            document.getElementById('day5Wind').textContent = 'Wind:' + data['list']['32']['wind']['speed'] + " MPH";
            document.getElementById('day5Humid').textContent = 'Humidity: ' + data['list']['32']['main']['humidity'] + " %";

        })
        .catch(function(err) {
          // catch any errors
            console.log(err);
        });
}); 

// save to local storage
searchButtonEl.addEventListener('click', function(event) {
    event.preventDefault()

    let storedHistoryArr = []

    let storedHistory = document.createElement('button');
    $(storedHistory).css("width", "140px");
    $(storedHistory).css("margin-top", "10px");

   let test = document.getElementById('searchedCity').value;
   localStorage.setItem('test', test);

    storedHistoryArr.pop(test);
    console.log(storedHistoryArr);

   let tester = localStorage.getItem('test');
   storedHistory.textContent = tester;

   listSearchHistEl.append(storedHistory);
})




//getting and displaying the text for the weekdays
var d = new Date();
var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",];

//getting the correct days to show
function whatDay(day){
    if(day + d.getDay() > 6){
        return day + d.getDay() - 7;
    }
    else{
        return day + d.getDay();
    }
}

    for (i=0; i<5; i++){
        document.getElementById("day" + (i+1)).innerHTML = weekday[whatDay(i)];
    }


