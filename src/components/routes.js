import SearchPage from './SearchPage.vue';
import RepoList from './repos/RepoList.vue';
import RepoView from './repos/RepoView.vue';

export const routes = [
    { path: '/:username/:repoName', component: RepoView },
    { path: '/:username', component: RepoList },
    { path: '/', component: SearchPage },
];