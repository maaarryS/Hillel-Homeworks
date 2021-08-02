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

  let newUserData = JSON.stringify({ 
    name: name,
    job: job
  });

  return fetch(`${API_URL}/users`, {
    body: newUserData,
    method: "POST",
    headers: {
      "content-type": "application/json"
    }
  })
  .then(response => {
    if (response.status === 201) {
      return Promise.resolve(response.json());
    } else {
      return Promise.reject("Try again");
    }
  });
}

export const updateUser = (id, name, job) => {

  let newUserData = JSON.stringify({ 
    name: name,
    job: job
  });
  return fetch(`${API_URL}/users/${id}`, {
    body: newUserData,
    method: "PUT",
    headers: {
      "content-type": "application/json"
    }
  })
  .then(response => {
    if (response.status === 200) {
      return Promise.resolve(response.json());
    } else {
      return Promise.reject("Try again");
    }
  });
}