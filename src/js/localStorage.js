export function getLocalStorage() {
    return JSON.parse(localStorage.getItem('city'));
};

export function setLocalStorage(city) {
    localStorage.setItem('city', JSON.stringify(city))
};