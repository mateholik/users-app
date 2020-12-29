<template>
  <div id="app">
    <Header />
    <div class="container">
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<script>
import { mapActions } from "vuex";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

export default {
  components: {
    Header,
    Footer,
  },
  mounted() {
    this.fetchUsers();
    this.fetchUsersPhotos();
  },
  methods: {
    ...mapActions(["fetchUsers", "fetchUsersPhotos"]),
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html {
  /* 1rem = 10px */
  font-size: 62.5%;
}
body {
  font-size: 1.6rem;
  font-family: "Roboto", sans-serif;
  line-height: 1.5;
  background: #f6faff;
}
.container {
  width: min(1024px, 100%);
  margin: 0 auto;
  padding: 0 1rem;
}
</style>
