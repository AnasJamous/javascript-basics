var n = document.getElementById('name');
var surname = document.getElementById('surname');
var city = document.getElementById('city');

var reset = document.querySelector('button');


reset.addEventListener("click", function(){
    if (confirm('Are you sure you want to reset the values?')) {
        n.value = "";
        surname.value = "";
        city.value = "";
    }
    else{
        n.value=n.value;
        surname.value=suname.value;
        city.value=city.value;

    }
})
