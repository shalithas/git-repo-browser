<template>
  <div v-if="showForm">
    <h1>GitHub Username</h1>
    <form v-on:submit="handleSubmit">
      <input name="username" />
    </form>
  </div>
</template>
<script>
export default {
  name: "SearchPage",
  data: () => {
    return {
      showForm: true
    };
  },
  methods: {
    handleSubmit(evt) {
      evt.preventDefault();
      console.log(evt);
    }
  }
};
</script>