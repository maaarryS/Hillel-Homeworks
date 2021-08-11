function checkCredentials(userName, password, onSuccess, onFail) {
  
  let xhr = new XMLHttpRequest();
  let userData = JSON.stringify({ 
    email: userName,
    password: password
  });

  console.log(userData);

  xhr.open("POST", "https://reqres.in/api/login", true);
  xhr.setRequestHeader("content-type", "application/json");
  
  xhr.send(userData);

  xhr.onload = (e) => {
    const status = e.target.status;
    console.log(e.target.response);
    if (status >= 200 && status < 400) {
      onSuccess(JSON.parse(e.target.response));
    } else {
      onFail(JSON.parse(e.target.response));
    }
  } 

}
