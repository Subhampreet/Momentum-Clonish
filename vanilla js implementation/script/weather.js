// HTML geolocation API for tapping the current location of user
$(function(){
    function getLocation(callback){
        if(!navigator.geolocation){
            console.log("Geolocation not supported by this browser.");
            return
        }
        function success(position){
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            callback(lat,lon);
        }
     
        function error(){
            console.log("Unable to get location");
        }
        navigator.geolocation.getCurrentPosition(success , error)
    } 
    getLocation(function(lat,lon){
        const apikey='f72420f7bd6ee9f51acc0652ebcee622';
        const url= 'https://api.openweathermap.org/data/2.5/weather?appid='+apikey+'&lat='+lat+'&lon='+lon+'&units=metric';
        fetch(url)
          .then(response => response.json())
          .then(data =>{ 
              const temp = Math.floor(data.main.temp);
              const city = data.name;
              document.getElementById('temprature').innerHTML= temp + "°" +"c";
              document.getElementById('city-name').innerHTML=city;
              const icon= data.weather[0].icon;
              console.log(icon);
              const imageUrl="http://openweathermap.org/img/wn/"+ icon + "@2x.png";
             document.getElementById("weather-icon").setAttribute("src",imageUrl)
          
          })
          
    })

})  