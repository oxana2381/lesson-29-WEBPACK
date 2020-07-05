

let date = document.getElementById('date')         
date.innerText= setDate();
     
export function setDate(){
    var now = new Date();
    var y = now.getFullYear();
    var m = now.getMonth() + 1;
    var d = now.getDate();
    var mm = m < 10 ? '0' + m : m;
    var dd = d < 10 ? '0' + d : d;
    return '' + dd + '-' + mm + '-' + y;}


   