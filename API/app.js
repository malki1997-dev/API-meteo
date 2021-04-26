


let APIKEY='bf7b506776ff14a6a2d29c9964389bdf';

let apical=function(city)
{
    let url='http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=metric';

    fetch(url).then((response)=>
response.json().then((data)=>
{
    console.log(data);
    document.querySelector('#city').innerHTML=data.main.name;
    document.querySelector('#temp').innerHTML=data.temp;
    document.querySelector('#humidity').innerHTML=data.main.humidity+"%";
    document.querySelector('#wind').innerHTML=data.wind.speed+'km/h';
})
);
}

document.querySelector('form').addEventListener('submit',function(e){
    e.preventDefault();
    let ville=document.querySelector('#inputcity').nodeValue;
    apical(ville);
})





