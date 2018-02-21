var show = document.getElementById('show');
var hide = document.getElementById('hide');
var txt = document.getElementById('texte');



hide.addEventListener("click",function (){
    txt.style.display = "none ";
})

show.addEventListener("click",function(){
    txt.style.display = "block";
})


