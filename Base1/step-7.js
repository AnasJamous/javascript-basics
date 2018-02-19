var shoe = document.getElementById('shoe_size');
var b_day = document.getElementById('year');

var result = document.getElementById('validate');


function res(){
    var sum = ((((shoe.value*2)+5) * 50) - b_day.value) + 1766;
    alert('The result is :' + ' ' + sum) ;
}

result.addEventListener("click", res);






