const inputbx = document.getElementById("input-box")
const listcon = document.getElementById("list-container")

function addTask(){

    if(inputbx.value === "")
    {
        alert("you must type something to add into the list")
    }
    else{

    let li = document.createElement("li");
    li.innerHTML=inputbx.value;
    listcon.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span)

    }
    inputbx.value = "";
    savedata();
}

listcon.addEventListener("click",function(e){
    if(e.target.tagName === "LI")
    {
        e.target.classList.toggle("checked");
        savedata();
    }
    else if(e.target.tagName === "SPAN")
    {
        e.target.parentElement.remove();
        savedata();
    }
},false);

function savedata(){
    localStorage.setItem("data",listcon.innerHTML);
}

function show(){
    listcon.innerHTML = localStorage.getItem("data");
}

show();