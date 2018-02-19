var age = document.getElementById('age');
var x = document.getElementById('validate');


function print() {
    if(age.value > 18)
    alert('You are over 18')
    else if (age.value <= 18 && age.value >=0 )
    alert('you are under 18')
    else if (age.value < 0)
    aler('enter a valid birth')
}

x.addEventListener("click", print);

