
import './date.js';
import { cities } from '../data/cityPhoto.js';
import {  getWeatherByCity } from './api.js';


let conteinerWeather=document.querySelector('.conteiner__weather');
let nameCity=document.getElementById('name__city');
let weatherInformation=document.getElementById('weather__information');
let description=document.getElementById('description');

//const k2c = 273.15;



function renderSelectCity(cityKey){
    let cityimage=cities[cityKey].url ;  
    let image=document.getElementById('image-placeholder');
    image.setAttribute('src',cityimage);

   

    getWeatherByCity(cities[cityKey].name)
   // .then(response => response.json())
    .then(data => {

        
    nameCity.innerText = data.name;
    weatherInformation.innerText = Math.floor( data.main.temp  )+ '°' + 'C';
    description.innerText = data.weather[0].description;})
}

function createCityDropdown(cities) {
    let select=document.createElement('select');
    let target=document.querySelector('.location');
    if(!target)return;
    select.setAttribute('name','city-selector');
    select.setAttribute('id','city-selector');
    select.setAttribute('class',"location__select");

    let emptyOption=document.createElement('option');
    emptyOption.setAttribute('value','none');
    emptyOption.innerText='--select--';
    select.append(emptyOption);
   


    

    for (const city in cities){
        let option=document.createElement('option');
        option.setAttribute('value',city);
        option.setAttribute('id',city);
        option.innerText=cities[city].name;
        select.append(option);
        

       
    }
    select.addEventListener('change',(event)=>{
    let cityKey=event.target.value ;
    renderSelectCity(cityKey);
    localStorage.setItem('selectedCity',cityKey);
  
    
   
    })

 target.append(select);


}
createCityDropdown(cities);

const selectedCity = localStorage.getItem('selectedCity');


if(selectedCity) {
    let selectedCityElement = document.getElementById(selectedCity)
    if(selectedCityElement){
        selectedCityElement.selected = true
        renderSelectCity(selectedCity);
    } 
} else {
    console.log('simple flow');
}

