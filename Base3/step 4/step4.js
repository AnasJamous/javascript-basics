var pass = document.getElementById('password');
var confirm = document.getElementById('confirmation');

var test = document.querySelector('button');

console.log('hello');

test.addEventListener('click',function(){
    if (pass.value != confirm.value)
    {
        pass.style.border = "2px solid red";
        confirm.style.border = "2px solid red";
    }
    else
        alert('Your password is correct')
})