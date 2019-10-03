<template>
  <div>
    <h1>GitHub Username</h1>
    <form v-on:submit="handleSubmit">
      <input name="username" />
    </form>
  </div>
</template>
<script>
import router from 'vue-router';

export default {
  name: "SearchPage",
  methods: {
    handleSubmit: function(evt) {
      evt.preventDefault();
      const input = evt.target.username;

      this.$router.push({ name: 'repo-list', params: { username: input.value } });
    }
  }
};
</script>