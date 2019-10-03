<template>
  <div>
    <div v-html="content"></div>
  </div>
</template>
<script>
import { getRepo } from "./repoData.js";
import marked from "marked";

export default {
  name: "RepoView",
  data: () => {
    return {
      repo: null,
      content: ""
    };
  },
  methods: {
    fetchRepo(username, repoName) {
      getRepo(username, repoName)
        .then(data => {
          this.content = marked(atob(data.content));
          this.repos = data;
        })
        .catch( () => {
          alert("No MD file");

          this.$router.push({
            name: "repo-list",
            params: { username: this.$route.params.username }
          });
        });
    }
  },
  mounted: function() {
    this.$nextTick(function() {
      this.fetchRepo(this.$route.params.username, this.$route.params.repoName);
    });
  },
  watch: {
    $route(to) {
      this.fetchRepo(to.params.username, this.$route.params.repoName);
    }
  }
};
</script>
<style scoped>
div {
  text-align: left;
}
</style>