<template>
  <div>
    <h1>{{ $route.params.username }}</h1>
    <ul>
      <RepoItem v-for="repo in repos" v-bind:key="repo.id" v-bind:repo="repo" />
    </ul>
  </div>
</template>
<script>
import { getRepos } from "./repoData.js";
import RepoItem from './RepoItem.vue';

export default {
  name: "RepoList",
  data: () => {
    return {
      repos: []
    };
  },
  components: {
    RepoItem
  },
  methods: {
    fetchRepos(username){
      getRepos(username).then(data => {
        this.repos = data;
      });
    }
  },
  mounted: function() {
    this.$nextTick(function() {
      this.fetchRepos(this.$route.params.username);
    });
  },
  watch: {
    $route(to, from) {
      this.fetchRepos(to.params.username);
    }
  }
};
</script>
<style scoped>
ul {
  text-align: left;
}
</style>