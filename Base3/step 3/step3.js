// var txt = document.getElementById('text');
// var green = document.getElementsByClassName('color green');
// var red = document.getElementsByClassName('color red');
// var blue = document.getElementsByClassName('color blue');


// if (green.onclick) {
//     green.onclick();
//  } else if (green.click) {
//     green.click();
//  }

//  function onclick()
//  {
//      txt.style.color = "green";
//  }


var color = document.getElementsByClassName('color');
var txt = document.getElementById('text');


function changeColor(eve) {
    if (eve == "green"){
        txt.style.color = "green";
    } else if (eve == "red"){
        txt.style.color = "red";
    } else if (eve == "blue"){
        txt.style.color = "blue";
    }
}


color[0].addEventListener('click',() => changeColor('green'))
color[1].addEventListener('click',() => changeColor('red'))
color[2].addEventListener('click',() => changeColor('blue'))