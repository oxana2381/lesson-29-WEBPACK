import '../styles/style.scss';
import './date.js';
import './localStorage.js'
import { cities } from '../data/cityPhoto.js';
import { getByCity } from './api.js';


function createCityDropdown(cities) {
    let select=document.createElement('select');
    let target=document.querySelector('.location');
    select.setAttribute('name','city-selector');
    select.setAttribute('id','city-selector');
    select.setAttribute('class',"location__select");

    let emptyOption=document.createElement('option');
    emptyOption.setAttribute('value','none');
    emptyOption.innerText='--select--';
    select.append(emptyOption);

    let conteinerWeather=document.querySelector('.conteiner__weather');
    let nameCity=document.getElementById('name__city');
    let weatherInformation=document.getElementById('weather__information');
    let description=document.getElementById('description');

    const k2c = 273.15;
   

    

    for (const city in cities){
        let option=document.createElement('option');
        option.setAttribute('value',city);
        option.innerText=cities[city].name;
        select.append(option);

       
    }
    select.addEventListener('change',(event)=>{
    let cityKey=event.target.value ;
    let cityimage=cities[cityKey].url ;  
    let image=document.getElementById('image-placeholder');
    image.setAttribute('src',cityimage);

    getByCity(cities[cityKey].name)
    .then(response => response.json())
    .then(data => {

        
    nameCity.innerText = data.name;
    weatherInformation.innerText = Math.floor( data.main.temp - k2c )+ '°' + 'C';
    description.innerText = data.weather[0].description;

        

    }

    )
    
   
});

 target.append(select);


}
createCityDropdown(cities);