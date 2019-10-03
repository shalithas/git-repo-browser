import SearchPage from './SearchPage.vue';
import RepoList from './repos/RepoList.vue';

export const routes = [
    { path: '/:username', component: RepoList },
    { path: '/', component: SearchPage },
];