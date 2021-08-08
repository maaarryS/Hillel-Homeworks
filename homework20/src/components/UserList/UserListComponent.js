import Component from "../../core/Component.js";
import renderTemplate from "../../core/utils/render.js";
import {deleteUser, createUser, updateUser} from "../../api.js";

export default class UserListComponent extends Component{
  
  constructor(template, entryId, onLogOut) {
    super(template, entryId);

    this.addListener("#log-out-btn", "click", onLogOut);

    this.state = {
      list: [],
      user: {}
    };

    this.isNewUser = false;

    this.userFormEl = this.realQuerySelector("#user-form");

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

      this.isNewUser = true;

      this.openUserModal();
    });

    this.addListener("#user-form", "click", e => {
      if (e.target.classList.contains("is-primary")) {
        this.onUserUpdateConfirm();
      }
    });
  }

  onUserUpdateConfirm() {

    const newName = this.realQuerySelector("#name-field").value;
    const job = this.realQuerySelector("#job-field").value;
    let {list, user} = this.state;

    if (this.isNewUser) {
      createUser(newName, job)
      .then(({name}) => {
        let newUserName = name.trim().split(" ");
        this.isNewUser = false;
        let newUser = {
          id: list.length + 1,
          first_name: newUserName[0],
          last_name: newUserName[1],
          avatar: "https://reqres.in/img/faces/4-image.jpg"
        };
        list.push(newUser);
        return list;
    })
    .then(e => {
      this.setState({list: this.state.list});
    })
    .catch(console.log);
  } else {
      const id = user.id;
      const name = user.first_name + user.last_name;
      const job = "user";

      updateUser(id, name, job)
        .then(({name}) => {
          let newUserName = newName.trim().split(" ");
  
          user.first_name = newUserName[0];
          user.last_name = newUserName[1];
        })
        .then(e => {
          this.setState({list: this.state.list});
        })
        .catch(console.log);;
      }

    };
  

  onDelete(evt) {
    const id = evt.target.parentElement.dataset["id"];

    deleteUser(id)  
      .then(e => {
        this.setState({
          list: this.state.list.filter(e => +e.id !== +id),
        });
      });
  };

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
    let {list, user} = this.state;
    super.render();

    const listEl = this.getRealElementById("list");
    const liTpl = this.querySelector("#list > li").outerHTML;

    const userFormEl = this.getRealElementById("user-form");
    const userFormTpl = this.querySelector("#user-form").innerHTML;

    userFormEl.innerHTML = renderTemplate(userFormTpl, user);

    listEl.innerHTML = list.reduce((tpl, e) => {
        return tpl + renderTemplate(liTpl, e);
    }, "<h1>Users List:</h1>");
  }

}