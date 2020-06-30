const API_KEY='07a4394bdd6059ae1a5ee2926eaa3126';


/*export function getByCity(city) {
    return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
}*/
//const API_KEY = '0ffd416aff3105ed18298e35a8ffaf0c';

export function getWeatherByCity(city) {
    return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&&appid=${API_KEY}`)
}
