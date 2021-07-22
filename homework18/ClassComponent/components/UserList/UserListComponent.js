import {Component} from "../Component.js";
import {getUserList} from "../../api.js";

export class UserListComponent extends Component{
  
  constructor(template, entryId) {
    super(template, entryId);
  }

  renderUsers(template, dataObject) { 
    for (let key in dataObject) {
      template = template.replaceAll(`{{${key}}}`, dataObject[key]);
    }
    
    return template;
  };

  renderUserList(page = 1, template) {
    getUserList(page, template)
    .then(e => {
      const list = e.data.reduce((res, e) => {
        let result = res + "\n" + `<li>${this.renderUsers(template, e)}</li>`;
        return result;
      }, "<h1>Users List:</h1>");

      this.entryEl.insertAdjacentHTML("beforeend", list);
    })
    .catch(e => {
      console.error(e);
    });
  }

}