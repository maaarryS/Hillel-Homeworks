let input = document.getElementById("input");
let list = document.getElementById("list");
let btn = document.getElementById("btn");



function createNewItem() {
  let userText = input.value;
  if(userText) {

    checkBox = document.createElement("input");
    checkBox.setAttribute("type", "checkbox");
    checkBox.classList.add("check-box");

    let liEl = document.createElement("li");
    liEl.textContent = userText;

    let date = new Date();
    let dateEl = document.createElement("span");
    dateEl.classList.add("date");
    dateEl.textContent = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}   ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

    liEl.insertAdjacentHTML("afterbegin", checkBox.outerHTML);
    liEl.insertAdjacentHTML("beforeend", dateEl.outerHTML);
    checkBox.addEventListener("click", crossCheckedItem);
    return liEl;
  }
}

function getTextFromInput() {
    list.append(createNewItem());
    input.value = "";
    input.setAttribute("autofocus", "true");
}

const crossCheckedItem = evtObject => {
  let checkBox = evtObject.target;
  if (checkBox.checked) {
    console.log(checkBox.parentElement);
    checkBox.parentElement.classList.add("done-item");
  }
}

btn.addEventListener("click", getTextFromInput);





