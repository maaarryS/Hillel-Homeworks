export class Component {
  constructor(template, entryId) {
    const el = document.createElement("div");
    el.insertAdjacentHTML("afterbegin", template);
    this.templateEl = el;
    this.entryEl = document.getElementById(entryId);
  }

  render() {
    if(this.entryEl.querySelector("#main")) {
      Array.prototype.forEach.call(this.entryEl.querySelector("#main"), e => e.remove());
    } 
    this.entryEl.insertAdjacentElement("afterbegin", this.templateEl);
  }
  
  dispose() {
    this.templateEl.remove();
  }
}