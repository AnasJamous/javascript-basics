for(let i = 1; i < 6; i++){
    let img = document.querySelector("#image"+i);
    img.addEventListener("mouseover", function(){
        img.src = "images/image"+ i + "_2.jpg"
    })
}
for(let i = 1; i < 6; i++){
    let img = document.querySelector("#image"+i);
    img.addEventListener("mouseout", function(){
        img.src = "images/image"+ i + ".jpg"
    })
}