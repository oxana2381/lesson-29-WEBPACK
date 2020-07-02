


import {  getWeatherByCity } from './api';
import { cities } from '../data/cityPhoto';



const container = document.querySelector('.cities-list');

function renderCity(data){
    const cityContainer = document.createElement('div');
    cityContainer.setAttribute('class', 'info');
    const cityTemp = document.createElement('span');
    cityTemp.setAttribute('class','temp')
    const cityDescription = document.createElement('span');
    cityDescription.setAttribute('class','description');
    const cityWind = document.createElement('span');
    cityWind.setAttribute('class','wind')
    cityDescription.innerText = data.weather[0].description;
    cityDescription.append(cityWind);
    cityWind.innerText = 'Wind'+':'+ data.wind.speed +'m/s' ;
    
    cityContainer.innerText = ` ${data.name}`+':';
    cityContainer.append(cityTemp);
     cityTemp.innerText =  Math.floor( data.main.temp )+ '°C'+ '' ;
     cityTemp.append(cityDescription);
    container.append(cityContainer);

}

let arrayOfPromises = [];

for(let city in cities){
    
   arrayOfPromises.push(getWeatherByCity(cities[city].name))  


}

Promise.all(arrayOfPromises).then(data => data.map(item => renderCity(item)));

