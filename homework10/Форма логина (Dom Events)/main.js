(function() {
  let userName, password;

  loginEl.addEventListener("input", (evt) => {
  userName = evt.target.value;
  enableBtn(userName, password);
  });

  pswdEl.addEventListener("input", (evt) => {
  password = evt.target.value;
  enableBtn(userName, password);
  });

  btnEl.addEventListener("click", function() {checkData(userName, password)});
}) ();
















  

