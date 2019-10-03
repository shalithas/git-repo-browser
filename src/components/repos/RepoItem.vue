<template>
  <router-link :to="{ name: 'repo-view', params: { username: repo.owner.login, repoName: repo.name }}">
    <li>{{repo.name}}</li>
  </router-link>
</template>
<script>
export default {
  name: "RepoItem",
  props: {
    repo: Object
  }
};
</script>
<style scoped>
li{
  font-size: 24px;
  margin-bottom: 10px;
}
</style>