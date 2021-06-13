function Accordion(element) {
  this.element = element;
  this.init = accordionInit;
  this.toggle = toggleItem;
  this.addBlock = addBlock;
  this.getOpenIndexes = getOpenIndexes;

  this._onItemClick = function(evtObj) {
    evtObj.target.parentElement.classList.toggle("extended");
  };
  this.element.addEventListener("click", this._onItemClick);
}

function accordionInit() {
  Array.prototype.forEach.call(this.element.children, e => {
    e.classList.add("accordion-item");
    if(e.children.length >= 2) {
      e.children[0].classList.add("title");
      e.children[1].classList.add("content");
    } else {
      throw new Error('Invalid accordion item');
    }
    
  })
}

function toggleItem(index) {
  this.element.children[index].classList.toggle("extended");
}

function addBlock(title, description) {
  this.element.insertAdjacentHTML('beforeEnd', `<div class="accordion-item">
      <div class="title">${title}</div>
      <div class="content">${description}</div>
  </div>`);
}

function getOpenIndexes() {
  let result = [];
  for(i = 0; i < this.element.children.length; i++) {
    if(this.element.children[i].classList.contains("extended"))
      result.push(i);
  }
  console.log(result);
}

function closeAllBlocks() {
  let contentBlocks = this.element.children;
  console.log(contentBlocks);
    Array.prototype.forEach.call(this.element.children, e => {
      e.classList.remove('extended');
    })
}

function openAllBlocks() {
  let contentBlocks = this.element.children;
  console.log(contentBlocks);
    Array.prototype.forEach.call(this.element.children, e => {
      e.classList.add('extended');
    })
}

const mainAccordion = new Accordion(document.getElementById("accordion"));
mainAccordion.init();

setTimeout(() => {
  mainAccordion.addBlock('new element', 'element content');
}, 3000);


let openIndexesBtn = document.getElementById("opened-blocks");
openIndexesBtn.addEventListener("click", getOpenIndexes.bind(mainAccordion));

let closeAllBtn = document.getElementById("close-all");
closeAllBtn.addEventListener("click", closeAllBlocks.bind(mainAccordion));

let openAllBtn = document.getElementById("open-all");
openAllBtn.addEventListener("click", openAllBlocks.bind(mainAccordion));