const API_KEY='07a4394bdd6059ae1a5ee2926eaa3126';


export function getByCity(city) {
    return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
}