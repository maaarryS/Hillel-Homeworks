const USERS = [
  { login: "admin", password: "password"},
  { login: "mod", password: "password1" },
  { login: "admin2", password: "password2" },
  { login: "user", password: "pass123" }
]

function checkCredentials(userName, password) {
  console.log(userName, password);
  return !!USERS.find(e => e.login === userName && e.password === password);
}
