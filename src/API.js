const ENDPOINT = "http://localhost:3001/";
const dogApiUrl = "https://dog.ceo/api/breeds/image/random/4";
const nameUrl = "https://api.randomuser.me/";
const signInUrl = `${ENDPOINT}signin`;
const validateUrl = `${ENDPOINT}validate`;

const apiHeaders = {
  "Content-Type": "application/json",
  Accept: "application/json"
};

const getExternal = url => fetch(url).then(resp => resp.json());

const get = url =>
  fetch(url, {
    headers: {
      Authorization: localStorage.getItem("token")
    }
  }).then(resp => resp.json());

const post = (url, data) => {
  return fetch(url, {
    method: "POST",
    headers: apiHeaders,
    body: JSON.stringify(data)
  }).then(resp => resp.json());
};

const patch = (url, id, data) => {
  return fetch(url + id, {
    method: "PATCH",
    headers: apiHeaders,
    body: JSON.stringify(data)
  }).then(resp => resp.json());
};

const destroy = (url, id) => fetch(`${url}${id}`, { method: "DELETE" });

const signIn = (username, password) => post(signInUrl, { username, password });

const validate = () => get(validateUrl);
const dogPic = () => getExternal(dogApiUrl);
const getName = () => getExternal(nameUrl);

export default {
  get,
  signIn,
  validate,
  dogPic,
  getName,
  patch,
  post,
  destroy
};
