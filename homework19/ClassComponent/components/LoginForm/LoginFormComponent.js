import Component from "../../core/Component.js";
import {checkUserCredentials} from "../../api.js";

export default class LoginFormComponent extends Component{
  
  constructor(template, entryId, onSuccess) {
    super(template, entryId);
    this.onSuccess = onSuccess;

    this.loginInputEl = this.getElementById("login");
    this.passwordInputEl = this.getElementById("password");
    this.signInBtnEl = this.getElementById("sign-in-btn");
    this.errorMessageEl = this.getElementById('error-message');

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

    this.errorMessageEl.classList.add("hidden");
    

    checkUserCredentials(userName, password)
    .then((e) => {
      this.onSuccess(e);
      console.log("Success!");
    })
    .catch((e) => {
      this.getElementById("error-message").classList.remove("hidden");
      this.passwordInputEl.value = "";
      console.log(e);
    })
  }

}