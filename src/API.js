const ENDPOINT = "http://localhost:3001/";

const signInUrl = `${ENDPOINT}signin`;
const validateUrl = `${ENDPOINT}validate`;

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

const signIn = (username, password) => post(signInUrl, { username, password });

const validate = () => get(validateUrl);

export default {
  get,
  signIn,
  validate
};
