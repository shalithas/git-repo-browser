import Axios from "axios";

const url = "https://api.github.com";

export const getRepos = username => {
  return Axios.get(`${url}/users/${username}/repos`).then(res => res.data);
};

export const getRepo = (username, repoName) => {
  return Axios.get(`${url}/repos/${username}/${repoName}/contents/README.md`).then(res => res.data);
};

export const getUser = username => {
  return Axios.get(`${url}/users/${username}`).then(res => res.data);
}
