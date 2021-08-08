import LoginFormComponent from "./components/LoginForm/LoginFormComponent.js";
import UserListComponent from "./components/UserList/UserListComponent.js";
import {getUserList} from "./api.js";

const isUserLoggedIn = localStorage.getItem("token");

const loginFormComponent = new LoginFormComponent(
  document.getElementById("login-form-template").innerHTML, 
  "main-entry",
  onSuccessLogin
);

const userListComponent = new UserListComponent(
  document.getElementById("user-list-template").innerHTML, 
  "main-entry",
  onLogOut
);

function onSuccessLogin({token}) {
  localStorage.setItem("token", token);
  loginFormComponent.dispose();
  loadUsers();
}

function onLogOut() {
  localStorage.removeItem("token");
  userListComponent.dispose();
  loginFormComponent.render();
}

function loadUsers() {
  getUserList()
  .then(({ data }) => {
    userListComponent.setState({ list: data });
  })
  .catch(e => console.log(e));
}

if (!isUserLoggedIn) {
  loginFormComponent.render();
} else {
    loadUsers();
}

