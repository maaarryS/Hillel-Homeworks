const USERS = [
  { login: "admin", password: "password"},
  { login: "mod", password: "password1" },
  { login: "admin2", password: "password2" },
  { login: "user", password: "pass123" }
]

const loginEl = document.getElementById("login"),
      pswdEl = document.getElementById("password"),
      mainEl = document.getElementById("main"),
      btnEl = document.getElementById("btn"),
      msgEls = document.getElementsByClassName("result-message");

function checkCredentials(userName, password) {
  console.log(userName, password);
  return !!USERS.find(e => e.login === userName && e.password === password);
}

function checkData(userName, password) {
    if (checkCredentials(userName, password)) {
      let successMsg = msgEls[0];
      successMsg.removeAttribute("hidden", "true");
      successMsg.classList.remove("hidden");
      successMsg.id = "success";
      successMsg.textContent = "Logged in";
      mainEl.innerHTML = null;
      mainEl.append(successMsg);
  
      console.log("success");
    } else {
      pswdEl.value = "";
      let failMsg = msgEls[0];
      failMsg.removeAttribute("hidden", "true");
      failMsg.classList.remove("hidden");
      failMsg.id = "fail";
      failMsg.textContent = "Failed to verify user. Try again";
      mainEl.append(failMsg);
    };
  
}

function enableBtn(userName, password) {
  if (userName && password) {
    btnEl.removeAttribute("disabled", "true");
  }
}