var div = document.getElementById("change")
var txt = document.getElementById("name");

txt.addEventListener("keyup", function(){
    div.innerHTML = txt.value;
})

 