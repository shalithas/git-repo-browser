import SearchPage from './SearchPage.vue';
import ResultPane from './ResultPane.vue';

export const routes = [
    { path: '/:username', component: ResultPane },
    { path: '/', component: SearchPage },
];