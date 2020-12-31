//Select a random image for background
document.addEventListener('DOMContentLoaded', (event) => {

    console.log('ran');
    var imgnum=Math.floor(Math.random() *4) +1; 
    document.getElementById("image").src = 'images/pic-'+imgnum+'.jpg';

},false);

//function to find the current time
function padWithZero(num){
    return (num < 10)?"0"+num : num;
}
function getTime()
{
const time = new Date();
var hours =  time.getHours();
hours = hours % 12;
hours = hours ? hours : 12;
var ampm = hours >= 12 ? 'pm' : 'am';
const minutes = padWithZero(time.getMinutes());
const seconds = padWithZero(time.getSeconds());

document.getElementById('time').innerHTML = hours + ":" + minutes  ;
}
//function to call getTime every second
setInterval(getTime,1000);



























//Quotes API
// const api="https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?";

// fetch(api)
//   .then(function(response) {
//     return response.json();
//   })
//   .then(function(data) {
//     console.log(data);
//   });
