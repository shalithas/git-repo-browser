import Axios from "axios";

const url = "https://api.github.com";


const token = process.env.VUE_APP_AUTH_TOKEN;
let config = {};
if(token){
  config = {
    headers: {
      'Authorization': `bearer ${token}`
    }
  };
}

export const getRepos = username => {
  return Axios.get(`${url}/users/${username}/repos`, {}, config).then(res => res.data);
};

export const getRepo = (username, repoName) => {
  return Axios.get(`${url}/repos/${username}/${repoName}/contents/README.md`, {}, config).then(res => res.data);
};

export const getUser = username => {
  return Axios.get(`${url}/users/${username}`, {}, config).then(res => res.data);
}
