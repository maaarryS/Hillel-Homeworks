(function() {
  const loginEl = document.getElementById("login"),
        pswdEl = document.getElementById("password"),
        mainEl = document.getElementById("main"),
        btnEl = document.getElementById("btn"),
        msgEls = document.getElementsByClassName("result-message");

  
  function enableBtn() {
    if (loginEl.value && pswdEl.value) {
      btnEl.removeAttribute("disabled", "true");
    }
  }

  loginEl.addEventListener("input", (evt) => {
  userName = evt.target.value;
  enableBtn();
  });

  pswdEl.addEventListener("input", (evt) => {
  password = evt.target.value;
  enableBtn();
  });

  btnEl.addEventListener("click", () => {
    const userName = loginEl.value;
    const password = pswdEl.value;

    checkCredentials(userName, password, 
      (e) => {
      let successMsg = msgEls[0];
      successMsg.removeAttribute("hidden", "true");
      successMsg.classList.remove("hidden");
      successMsg.id = "success";
      successMsg.textContent = "Logged in";
      mainEl.innerHTML = null;
      mainEl.append(successMsg);
  
      console.log("success");
    }, 
    (e) => {
      pswdEl.value = "";
      let failMsg = msgEls[0];
      failMsg.removeAttribute("hidden", "true");
      failMsg.classList.remove("hidden");
      failMsg.id = "fail";
      failMsg.textContent = "Failed to verify user. Try again";
      mainEl.append(failMsg);
    }
    )
  });
})();
















  

