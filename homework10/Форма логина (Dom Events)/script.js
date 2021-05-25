function checkData() {
  if (userName === "admin" && password === "password123") {
    let successMsg = document.createElement('p');
    successMsg.className = "result-message";
    successMsg.id = "success";
    successMsg.textContent = "Logged in";
    mainEl.innerHTML = null;
    mainEl.append(successMsg);

    console.log("success");
  } else {
    pswdEl.value = "";
    let failMsg = document.createElement('p');
    failMsg.className = "result-message";
    failMsg.id = "fail";
    failMsg.textContent = "Failed to verify user. Try again";
    mainEl.append(failMsg);
  };
}

function enableBtn() {
  if (userName && password) {
    btnEl.removeAttribute("disabled", "true");
  }
}

let loginEl = document.getElementById("login"),
    pswdEl = document.getElementById("password"),
    mainEl = document.getElementById("main"),
    btnEl = document.getElementById("btn");

let userName, password;

loginEl.addEventListener("input", (evt) => {
  userName = evt.target.value;
  enableBtn();
});

pswdEl.addEventListener("input", (evt) => {
  password = evt.target.value;
  enableBtn();
});

btnEl.addEventListener("click", checkData);














  

