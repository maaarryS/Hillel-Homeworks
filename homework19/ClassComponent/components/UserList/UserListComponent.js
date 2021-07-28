import Component from "../../core/Component.js";
import renderTemplate from "../../core/utils/render.js";
import {deleteUser, createUser, updateUser} from "../../api.js";

export default class UserListComponent extends Component{
  
  constructor(template, entryId, onLogOut) {
    super(template, entryId);

    this.getElementById("log-out-btn").addEventListener("click", onLogOut);

    this.state = {
      list: [],
      user: {}
    };

    this.addListener("#list", "click", e => {
      e.target.classList.contains("delete") && this.onDelete(e);
      e.target.classList.contains("update") && this.onUpdateOpen(e);
    });

    this.addListener("#create-user-btn", "click", e => {
      this.setState({
        user: {
          first_name: "",
          last_name: ""
        }
      });

      this.openUserModal();
    });

    this.addListener("#user-form", "click", e => {
      if (e.target.classList.contains("is-primary")) {
        e.preventDefault();
        this.onUserUpdateConfirm();
      }
    });
  }

  onUserUpdateConfirm() {
    const {user} = this.state;

    const name = this.realQuerySelector("#name-field").value;
    const job = this.realQuerySelector("#job-field").value;

    createUser(name, job);
  }

  onDelete(evt) {
    const id = evt.target.parentElement.dataset["id"];

    deleteUser(id)
      .then(e => {
        this.setState({
          list: this.state.list.filter(e => +e.id !== +id),
        });
      });
  }

  openUserModal() {
    const userFormEl = this.getRealElementById("user-form");
    userFormEl.showModal();
  }

  onUpdateOpen(evt) {
    const id = evt.target.parentElement.dataset["id"];

   
    this.setState({
      user: this.state.list.find(e => +e.id === +id),
    });

    this.openUserModal();
  }

  render() {
    const {list, user} = this.state;

    super.render();

    const listEl = this.getElementById("list");
    const liTpl = listEl.firstElementChild.outerHTML;

    const userFormEl = this.getRealElementById("user-form");
    const userFormTpl = this.querySelector("#user-form").innerHTML;

    userFormEl.innerHTML = renderTemplate(userFormTpl, user);

    listEl.innerHTML = list.reduce((tpl, e) => {
        return tpl + renderTemplate(liTpl, e);
    }, "<h1>Users List:</h1>");
  }

}