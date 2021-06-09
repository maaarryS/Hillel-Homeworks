let itemInputEl = document.getElementById("item-input");
let listEl = document.getElementById("todo-list");
let addItemBtnEl = document.getElementById("add-item-button");
let itemTemplate = document.querySelector("#item-template").innerHTML;

const render = (template, dataObject) => {
  for (let key in dataObject) {
    template = template.replaceAll(`{{${key}}}`, dataObject[key]);
  }
  return template;
}

const addItem = (todoItem, list) => {
  return function() {
    let newItem = todoItem.value;

    if (todoItem.tagName === "SPAN") {
      newItem = todoItem.textContent;
    }
    if(!newItem) return;
  
    const liEl = document.createElement("li");
    liEl.innerHTML = render(itemTemplate, {
      label: newItem,
      date: new Date().toISOString()
    });
    list.append(liEl);
    itemInputEl.value = "";
  }
  
};

addItemBtnEl.addEventListener("click", addItem(itemInputEl, listEl));


const onCheckBoxToggle = (evt) => {
  const currentItem = evt.target.parentElement;
  const todoItem = evt.target.parentElement.querySelector(".item-value");
  if (evt.target.type === "checkbox") {
    currentItem.checked = !currentItem.checked;
    if (currentItem.checked) {
      todoItem.classList.add("checked-item");
    } else if (!currentItem.checked) {
      todoItem.classList.remove("checked-item");
    }
  }
  if (evt.target.dataset["action"] === "delete") {
    evt.target.parentElement.remove();
  }
  if (evt.target.dataset["action"] === "copy") {
    addItem(todoItem, listEl)();
  }
}

listEl.addEventListener("click", onCheckBoxToggle);