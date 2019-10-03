<template>
  <div>
    <h1>GitHub Username</h1>
    <form v-on:submit="handleSubmit">
      <input name="username" />
    </form>
  </div>
</template>
<script>
import { getUser } from "./repos/repoData.js";

export default {
  name: "SearchPage",
  methods: {
    handleSubmit: async function(evt) {
      evt.preventDefault();
      const input = evt.target.username;

      try {
        const user = await getUser(input.value);

        this.$router.push({
          name: "repo-list",
          params: { username: input.value }
        });
      } catch (error) {
        alert("User not found");
      }
    }
  }
};
</script>