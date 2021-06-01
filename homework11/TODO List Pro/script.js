let input = document.getElementById("input");
let list = document.getElementById("list");
let btn = document.getElementById("btn");

let toDoList = [];

function createNewItem() {

  let newItem = {
    toDo: input.value,
    checked: false,
    time: new Date(),
  }

  toDoList.push(newItem);
  displayItems();
  input.value = "";
}

function displayItems() {
  let itemList = "";
  if (toDoList.length === 0) list.innerHTML = "";
  toDoList.forEach( function(item, i){
    let date = `${item.time.getDate()}-${item.time.getMonth() + 1}-${item.time.getFullYear()}   ${item.time.getHours()}:${item.time.getMinutes()}:${item.time.getSeconds()}`;
    itemList += `
      <li>
        <input type="checkbox" id="item-${i}" ${item.checked ? "checked" : ""} class="check-box">
        <label for="item-${i}" class="item-value${item.checked ? " checked-item" : ""}">${item.toDo}</label>
        <span id="time-${i}" class="date">${date}</span>
        <button class="delete-button">Delete</button>
        <button class="copy-button">Copy</button>
      </li>
    `;
    list.innerHTML = itemList;
  })
}


function copyItem(item) {
  let itemCopy = {
    toDo: item.toDo,
    checked: false,
    time: new Date()
  }
  toDoList.push(itemCopy);
  displayItems();
  input.value = "";
}

list.addEventListener("click", evt => {
  let checkBoxes = list.querySelectorAll(".check-box");

  for (item of checkBoxes) {
    if (evt.target === item) {
      let idInput = evt.target.getAttribute("id");
      let i = idInput.slice(-1);
    
      let item = toDoList[i];
      item.checked = !item.checked;
    }
  }
  
});


list.addEventListener("click", evt => {
  let itemEls = list.children;
  for (i = 0; i < itemEls.length; i++) {
    let dltBtn = itemEls[i].querySelector(".delete-button");
    let copyBtn = itemEls[i].querySelector(".copy-button");

    if (evt.target === dltBtn) {
      toDoList.splice(i, 1);
    }
    if (evt.target === copyBtn) copyItem(toDoList[i]);
  }
  displayItems();
})


btn.addEventListener("click", createNewItem);