<template>
  <Navigation />
  <router-view />
</template>

<script>
import Navigation from "./components/Navigation.vue";
export default {
  components: {
    Navigation: Navigation,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@600&display=swap");

* {
  font-family: "Open Sans", sans-serif;
}
</style>
