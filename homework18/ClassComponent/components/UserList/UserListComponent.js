import {Component} from "../Component.js";
import {getUserList} from "../../api.js";

export class UserListComponent extends Component{
  
  constructor(template, entryId) {
    super();
    const el = document.createElement("div");
    el.insertAdjacentHTML("afterbegin", template);
    this.templateEl = el;
    this.entryEl = document.getElementById(entryId);
  
  }

  renderUsers(template, dataObject) { 
    for (let key in dataObject) {
      console.log(template);
      template = template.replaceAll(`{{${key}}}`, dataObject[key]);
    }
    
    return template;
  };

  renderUserList(page = 1, template) {
    getUserList(page, template)
    .then(e => {
      console.log(e.data);
      const list = e.data.reduce((res, e) => {
        console.log(template);
        let result = res + "\n" + `<li>${this.renderUsers(template, e)}</li>`;
        console.log(result);
        return result;
      }, "<h1>Users List:</h1>");

      this.entryEl.insertAdjacentHTML("beforeend", list);
    })
    .catch(e => {
      console.error(e);
    });
  }

}