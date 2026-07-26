let btn = document.querySelector("#btn")
let listContainer = document.querySelector(".list-container")
let inputBox = document.querySelector("#input-box")

btn.addEventListener("click", () => {
    if (inputBox.value.length == 0) {
        alert("please enter some task...");
    }
    else {
        let li = document.createElement("li");
        let span = document.createElement("span");
        li.innerText = inputBox.value;
        span.innerText = "X";
        li.append(span);
        listContainer.append(li);
        inputBox.value = ""
        saveTask();
    }

})

listContainer.addEventListener("click", (evt) => {
    if (evt.target.tagName == "SPAN") {
        evt.target.parentElement.remove();
        saveTask();
    }
    else {
        evt.target.classList.toggle("checked");
        saveTask();
    }
})

function saveTask() {
    localStorage.setItem("data", listContainer.innerHTML)
}

function getTask() {
    listContainer.innerHTML = localStorage.getItem("data")
}

getTask()
