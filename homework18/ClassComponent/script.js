import {LoginFormComponent} from "./components/LoginForm/LoginFormComponent.js";
import {UserListComponent} from "./components/UserList/UserListComponent.js";

const isUserLoggedIn = false;

const loginFormComponent = new LoginFormComponent(
  document.getElementById("login-form-template").innerHTML, 
  "main-entry",
  onSuccessLogin
  );

const userListComponent = new UserListComponent(
  document.getElementById("user-list-template").innerHTML, 
  "user-list"
);

function onSuccessLogin() {
  loginFormComponent.dispose();
  userListComponent.renderUserList(1, document.getElementById("user-list-template").innerHTML);
}

if (!isUserLoggedIn) {
  loginFormComponent.render();
} else {
  userListComponent.render();
}

