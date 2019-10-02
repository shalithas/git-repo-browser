<template>
  <div v-if="showForm">
    <h1>GitHub Username</h1>
    <form v-on:submit="handleSubmit">
      <input name="username" />
    </form>
  </div>
  <div v-else>
    <p>Test</p>
  </div>
</template>
<script>
import { getRepos } from "./repoData.js";

export default {
  name: "SearchPage",
  data: () => {
    return {
      showForm: true,
      repos: []
    };
  },
  methods: {
    async handleSubmit(evt) {
      evt.preventDefault();
      const input = evt.target.username;
      try {
          this.repos = await getRepos(input.value);
      } catch (error) {
          console.log(error);
      }
      this.showForm = false;
    }
  }
};
</script>