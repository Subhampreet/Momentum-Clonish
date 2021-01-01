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
function getGreet(){
    if(hours>4 && hours<12)
       greet="Good Morning."
    else if(hours>=12 && hours<4)
       greet="Good Afternoon."
    else 
        greet="Good Evening."
    return greet;         
}
var  greet = getGreet();
console.log(greet);
hours = hours % 12;
hours = hours ? hours : 12;
var ampm = hours >= 12 ? 'pm' : 'am';
const minutes = padWithZero(time.getMinutes());
const seconds = padWithZero(time.getSeconds());

document.getElementById('time').innerHTML = hours + ":" + minutes  ;

document.getElementById('greeting').innerHTML = greet;

}
//function to call getTime every second
setInterval(getTime,1000);