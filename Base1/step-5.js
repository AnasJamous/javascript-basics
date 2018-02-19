var num1 = document.getElementById('first_number');
var num2 = document.getElementById('second_number');
var cro = document.getElementById('validate')

function cross(){
    let result = num1.value * num2.value ;
    alert('the result is :' + ' ' + result );
}


cro.addEventListener("click", cross);