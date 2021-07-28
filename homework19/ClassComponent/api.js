const API_URL = "https://reqres.in/api";

export const checkUserCredentials = function(userName, password) {
  let userData = JSON.stringify({ 
    email: userName,
    password: password
  });

  return fetch(`${API_URL}/login`, {
    body: userData,
    method: "POST",
    headers: {
      "content-type": "application/json"
    }
  })
  .then(response => {
    console.log(response);
    if (response.status >= 200 && response.status < 400) {
      return Promise.resolve(response.json());
    } else {
      return Promise.reject("User not found");
    }
  });
};

export const getUserList = (page = 1) => {
  return fetch(`${API_URL}/users?page=${page}`)
    .then(e => e.json())
    .catch(e => {
      console.error(e);
    });
};

export const deleteUser = id => fetch(`${API_URL}/users/${id}`, {
  method: 'DELETE'
});

export const createUser = (name, job) => {
  console.log(name, job);
}

export const updateUser = (id, name, job) => {
  console.log(id, name, job);
}