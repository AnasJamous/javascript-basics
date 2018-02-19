function Name() {
    var txt;
    var person = prompt("Please enter your name:",'');
    if (person == null || person == "") {
        txt = "you didn't enter a name";
    } else {
        txt = "Hello " + person ;
    }
    document.getElementById("Test").innerHTML = txt;
}