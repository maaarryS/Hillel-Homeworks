import {Component} from "../Component.js";
import {checkUserCredentials} from "../../api.js";

export class LoginFormComponent extends Component{
  
  constructor(template, entryId, onSuccess) {
    super();
    const el = document.createElement("div");
    el.insertAdjacentHTML("afterbegin", template);
    this.templateEl = el;
    this.entryEl = document.getElementById(entryId);
    this.onSuccess = onSuccess;

    this.loginInputEl = this.templateEl.querySelector("#login");
    this.passwordInputEl = this.templateEl.querySelector("#password");
    this.signInBtnEl = this.templateEl.querySelector("#sign-in-btn");

    this.loginInputEl.addEventListener("input", this.validate.bind(this));
    this.passwordInputEl.addEventListener("input", this.validate.bind(this));
    this.signInBtnEl.addEventListener("click", this.onSignInClick.bind(this));
  }


  validate() {
    if (this.loginInputEl.value && this.passwordInputEl.value) {
      this.signInBtnEl.removeAttribute("disabled", "true");
    }
  }

  onSignInClick() {
    const userName = this.loginInputEl.value;
    const password = this.passwordInputEl.value;

    this.templateEl.querySelector("#error-message").classList.add("hidden");
    

    checkUserCredentials(userName, password)
    .then((e) => {
      this.onSuccess(e);
      document.querySelector("#success-entry").classList.remove("hidden");
      console.log("Success!");
    })
    .catch((e) => {
      this.templateEl.querySelector("#error-message").classList.remove("hidden");
      this.passwordInputEl.value = "";
      console.log(e);
    })
  }

}