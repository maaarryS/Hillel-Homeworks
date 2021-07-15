(function() {
  const loginEl = document.getElementById("login"),
        pswdEl = document.getElementById("password"),
        mainEl = document.getElementById("main"),
        btnEl = document.getElementById("btn"),
        msgEls = document.getElementsByClassName("result-message"),
        userListEl = document.getElementById("user-list"),
        userListTPL = document.getElementById("user-list-template").innerText;

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

    checkCredentials(userName, password)
    .then((e) => {
      let successMsg = msgEls[0];
      successMsg.removeAttribute("hidden", "true");
      successMsg.classList.remove("hidden");
      successMsg.id = "success";
      successMsg.textContent = "Logged in";
      mainEl.innerHTML = null;
      mainEl.append(successMsg);
      console.log("Success!");
    })
    .catch((e) => {
      pswdEl.value = "";
      let failMsg = msgEls[0];
      failMsg.removeAttribute("hidden", "true");
      failMsg.classList.remove("hidden");
      failMsg.id = "fail";
      failMsg.textContent = "Failed to verify user. Try again";
      mainEl.append(failMsg);
      console.error(e);
      throw new Error(e);
    })
    .then(() => {
      return getUserList();
    })
    .then(e => {
      const list = e.data.reduce((res, e) => {
        return res + "\n" + `<li>${render(userListTPL, e)}</li>`;
      }, "<h1>Users List:</h1>");

      userListEl.insertAdjacentHTML("beforeend", list);
      if(userListEl.hasAttribute("hidden", "true")) {
        userListEl.removeAttribute("hidden", "true");
      }
    })
    .catch(e => {
      console.error(e);
    });
  });
}) ();