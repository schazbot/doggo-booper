const ENDPOINT = "http://localhost:3000/";

const SIGNIN = `${ENDPOINT}signin`;

const post = (url, data) => {
  return fetch(url, {
    method: "POST",
    headers: { "Response-Type": "application/json" },
    body: JSON.stringify(data)
  }).then(resp => resp.json());
};

const signIn = (username, password) => { 
    post(SIGNIN, {username, password})
}



export default {signIn}