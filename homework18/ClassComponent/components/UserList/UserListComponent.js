import {Component} from "../Component.js";
import {getUserList} from "../../api.js";

export class UserListComponent extends Component{
  
  constructor(template, entryId) {
    super(template, entryId);
  }

  renderUsers(dataObject) { 
    let newTemplate = this.templateEl.innerHTML;
    for (let key in dataObject) {
      newTemplate = newTemplate.replaceAll(`{{${key}}}`, dataObject[key]);
    }
    
    return newTemplate;
  };


  renderUserList(page = 1) {
    getUserList(page)
    .then(e => {
      const list = e.data.reduce((res, e) => {
        let result = res + "\n" + `<li>${this.renderUsers(e)}</li>`;
        return result;
      }, "<h1>Users List:</h1>");

      this.entryEl.insertAdjacentHTML("beforeend", list);
    })
    .catch(e => {
      console.error(e);
    });
  }

}