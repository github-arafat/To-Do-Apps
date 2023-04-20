const inputBox = document.getElementById("input_box");
const listContainer = document.getElementById("list_container");

function addTask(){
    if(inputBox.value === ""){
        alert("You must write something");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    // saveData();
}

listContainer.addEventListener("click" , function(t){
    if(t.target.tagName === "LI"){
        t.target.classList.toggle("checked");
    }
    else if (t.target.tagName === "SPAN"){
        t.target.parentElement.remove();
    }
}, false);

// function saveData(){
//     localStorage.setItem("data", listContainer.innerHTML);
// }

// function visibleTask(){
//     listContainer.innerHTML = localStorage.getItem("data");
// }
// visibleTask();