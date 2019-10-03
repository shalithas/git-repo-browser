<template>
  <a v-bind:href="repo.contents_url" target="_blank">
    <li>{{repo.name}}</li>
  </a>
</template>
<script>
export default {
  name: "RepoItem",
  props: {
    repo: Object
  }
};
</script>