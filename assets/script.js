function getForecast () {

var searchedCityEL = document.getElementById("searchedCity");
var cityNameEL = document.getElementById("cityName");
cityNameEL.innerHTML = "--".searchedCityEL.value+"--";

    fetch('https://api.openweathermap.org/data/2.5/forecast?q=' + searchedCityEl.value + '&units=imperial&appid=285f3aad6388025cc10ddacdf8329eaa')  
    .then(response => response.json())
    .then(data => {
        //getting min / max
        for(i = 0; i<5; i++) {
            document.getElementById("day" + (i+1) + "Min: ") + Number(data.list[i].main.temp.min - 273.15).toFixed(1) + "°";
        }
        for (i=0; i<5; i++) {
            document.getElementById("day" + (i+1) + "Max").innerHTML = "Max: " + Number(data.list[i].main.temp_max - 273.15).toFixed(2) + "°";
        }
        //weather icons
        for (i= 0; i<5; i++) {
            document.getElementById("icon" + (i+1)).src = "http://openweathermap.org/img/wn/"+
            data,list[i].weather[0].icon
            +".png";
        }
        console.log(data)
    })
}

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


