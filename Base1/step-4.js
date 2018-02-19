
var buttom = document.getElementById("validate");

function print(){
    var name = document.getElementById("name");
    var l_name = document.getElementById("surname");
    var city = document.getElementById("city");
    alert ('name:'+ ' ' + name.value + '\n' +
     'surName:'+' ' + l_name.value + '\n' + 'city:'+ ' ' + city.value);    
}

buttom.addEventListener("click", print);
