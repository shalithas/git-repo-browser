<template>
  <div>
    <h1>GitHub Username</h1>
    <form v-on:submit="handleSubmit">
      <input name="username" />
    </form>
  </div>
</template>
<script>
export default {
  name: "SearchPage",
  methods: {
    async handleSubmit(evt) {
      evt.preventDefault();
      const input = evt.target.username;
    }
  }
};
</script>