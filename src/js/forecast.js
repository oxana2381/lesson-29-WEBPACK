import { getForecast } from './api';
import './date.js';
import { cities } from '../data/cityPhoto';



const selectedCity = localStorage.getItem('selectedCity');

if(selectedCity) {

    getForecast(cities[selectedCity].name).then(data=>{
        
           return data.list.reduce(( accumulator , item ) => {
               let dateKey = new Date(item.dt_txt).getDate()
               
           if(!accumulator[dateKey]){
               accumulator[dateKey] = [] ;
   
           }
           accumulator[dateKey].push(item);
           return accumulator;
   
           },{})
        }).then(result => {
            for(let day in result) {
           result[day].map(item => {

        
            const time = new Date(item.dt_txt).getHours();
            if (time === 12 ){

               
                let mainBox = document.querySelector('.forecast-mainbox');
               // let title = document.createElement('h1');
                let forecastInfoBox =document.createElement('div');
                forecastInfoBox.setAttribute('class','forecastBox');
                let forecastDate = document.createElement('span');
                let day = new Date(item.dt_txt).getDate();
                    let month = new Date(item.dt_txt).getMonth() + 1;
                    let year = new Date(item.dt_txt).getFullYear();
                    let mm = month < 10 ? '0' + month : month;
                    let dd = day < 10 ? '0' + day : day;
                forecastDate.innerText = dd + "." + mm + "." + year;

                 //title.innerText=cities[selectedCity].name + 'Forecast';
                let forecastName = document.createElement('span');
                forecastName.innerText = cities[selectedCity].name;
                let forecastTemp = document.createElement('span');
                forecastTemp.innerText =  Math.floor( item.main.temp )+ '°C'+ '' ;
                let forecastDescription = document.createElement('span');
                forecastDescription.innerText = item.weather[0].description;
                let forecastWind = document.createElement('span');
                forecastWind.innerText = 'Wind'+':'+ item.wind.speed +'m/s';

               // title.append(mainBox);
                mainBox.append(forecastInfoBox);
                forecastInfoBox.append(forecastDate);
                forecastDate.append(forecastName);
                forecastName.append(forecastTemp);
                forecastTemp.append(forecastDescription);
                forecastDescription.append( forecastWind);
               

                console.log(result[day])
            }
                })


          }
        }
        )}