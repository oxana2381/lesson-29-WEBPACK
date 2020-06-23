export  let setDate = new Date;
let totalDate = setDate.getDate()+'-'+'0'+(setDate.getMonth()+1)+'-'+setDate.getFullYear();
let date = document.getElementById('date');
date.innerText=totalDate;
