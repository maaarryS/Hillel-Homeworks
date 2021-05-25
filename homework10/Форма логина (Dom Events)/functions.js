let loginEl = document.getElementById("login"),
    pswdEl = document.getElementById("password"),
    mainEl = document.getElementById("main"),
    btnEl = document.getElementById("btn"),
    msgEls = document.getElementsByClassName("result-message");


function checkData(userName, password) {

  if (userName === "admin" && password === "password123") {
    let successMsg = msgEls[0];
    successMsg.removeAttribute("hidden", "true");
    successMsg.id = "success";
    successMsg.textContent = "Logged in";
    mainEl.innerHTML = null;
    mainEl.append(successMsg);

    console.log("success");
  } else {
    pswdEl.value = "";
    let failMsg = msgEls[0];
    failMsg.removeAttribute("hidden", "true");
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