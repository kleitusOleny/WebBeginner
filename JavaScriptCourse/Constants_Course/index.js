// const x = a; is can't be change

const pi =3.15;
let radius;
let circumference = 11;

document.getElementById("myBtn").onclick = function() {
    radius = document.getElementById("myText").value;
    radius = Number(radius);
    circumference = 2 * pi * radius;
    document.getElementById("myH3").textContent = circumference + " cm";

}















