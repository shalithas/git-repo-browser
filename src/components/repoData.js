import Axios from "axios";

const url = "https://api.github.com";

export const getRepos = username => {
  return Axios.get(`${url}/users/${username}/repos`).then(res => res.data);
};
