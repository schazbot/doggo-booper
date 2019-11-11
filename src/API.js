const ENDPOINT = "http://localhost:3001/";
const dogApiUrl = "https://dog.ceo/api/breeds/image/random/4";
const nameUrl = "https://api.randomuser.me/";
const MYDOGSURL = "http://localhost:3001/mydogs/";
const signInUrl = `${ENDPOINT}signin`;
const validateUrl = `${ENDPOINT}validate`;

const getExternal = url => fetch(url).then(resp => resp.json());

const get = url =>
  fetch(url, {
    headers: {
      Authorization: localStorage.getItem("token")
    }
  }).then(resp => resp.json());

const post = (url, data) =>
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify(data)
  }).then(resp => resp.json());

const patch = (url, id, data) =>
  fetch(url + `${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify(data)
  });

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
  patch
};
