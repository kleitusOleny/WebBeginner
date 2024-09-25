console.log("Test connection");

let decreaseBtn = document.getElementById("decreaseBtn");
let increaseBtn = document.getElementById("increaseBtn");
let resetBtn = document.getElementById("resetBtn");

let count = 0;

decreaseBtn.onclick = function(){
    count--;
    document.getElementById("count").textContent = count;
}

increaseBtn.onclick = function(){
    count++;
    document.getElementById("count").textContent = count;
}

resetBtn.onclick = function(){
    count = 0;
    document.getElementById("count").textContent = count;
}
