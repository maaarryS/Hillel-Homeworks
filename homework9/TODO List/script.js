let input = document.getElementById("input");
let list = document.getElementById("list");
let btn = document.getElementById("btn");


function getTextFromInput() {
  let userText = input.value;
  if(userText) {
    let li = document.createElement("li");
    li.textContent = userText;
    list.append(li);
    input.value = "";
  }
}

btn.onclick = getTextFromInput;
