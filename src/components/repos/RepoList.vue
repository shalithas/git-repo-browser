<template>
  <div>
    <div class="user">
      <img v-bind:src="user.avatar_url" alt="Avatar" width="100" />
      <h1>
        {{ user.name }} (
        <a v-bind:href="user.html_url" target="_blank">{{ user.login }}</a> )
      </h1>
    </div>
    <ul>
      <RepoItem v-for="repo in repos" v-bind:key="repo.id" v-bind:repo="repo" />
    </ul>
  </div>
</template>
<script>
import { getRepos, getUser } from "./repoData.js";
import RepoItem from "./RepoItem.vue";

export default {
  name: "RepoList",
  data: () => {
    return {
      repos: [],
      user: null
    };
  },
  components: {
    RepoItem
  },
  methods: {
    fetchRepos(username) {
      getRepos(username).then(data => {
        this.repos = data;
      });

      getUser(username).then(data => {
        this.user = data;
        console.log(data);
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
div.user {
  display: flex;
}

.user img,
.user h1 {
  display: inline-block;
  height: 100px;
}

.user h1 {
  line-height: 100px;
  margin: 0 0 0 20px;
}

* {
  text-align: left;
}
</style>