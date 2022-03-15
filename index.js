let count=0;
let counter=document.getElementById("count-el");
let countStr=document.getElementById("count-str")
function increment(){
    count++;
    counter.textContent=count;
}

function save(){
    
    let countString= count +" - "
    countStr.innerText+=countString
    count=0
    counter.textContent=0
}