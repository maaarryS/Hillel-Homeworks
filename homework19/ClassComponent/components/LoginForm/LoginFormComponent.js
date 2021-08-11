import Component from "../../core/Component.js";
import {checkUserCredentials} from "../../api.js";

export default class LoginFormComponent extends Component{
  
  constructor(template, entryId, onSuccess) {
    super(template, entryId);
    this.onSuccess = onSuccess;

    this.loginInputEl = this.getRealElementById("login");
    this.passwordInputEl = this.getRealElementById("password");
    this.signInBtnEl = this.getRealElementById("sign-in-btn");
    this.errorMessageEl = this.getRealElementById('error-message');

    this.addListener("#login", "input", this.validate.bind(this));
    this.addListener("#password", "input", this.validate.bind(this));
    this.addListener("#sign-in-btn", "click", this.onSignInClick.bind(this));
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