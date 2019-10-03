import SearchPage from "./SearchPage.vue";
import RepoList from "./repos/RepoList.vue";
import RepoView from "./repos/RepoView.vue";

export const routes = [
  { path: "/:username/:repoName", component: RepoView, name: 'repo-view' },
  { path: "/:username", component: RepoList, name: 'repo-list' },
  { path: "/", component: SearchPage, name: 'home' }
];
