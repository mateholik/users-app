<template>
  <div id="app">
    <Header />
    <div class="container">
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </div>
    <Form />
    <Footer />
  </div>
</template>

<script>
import { mapActions } from "vuex";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Form from "./components/sections/Form";

export default {
  components: {
    Header,
    Footer,
    Form,
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

<style lang="scss">
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
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  padding: 0 1rem;
}
.btn {
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 8rem;
  height: 2.5rem;
  box-shadow: 0 0.3rem #64a0fd;
  border-radius: 0.5rem;
  font-size: 1.4rem;
  background: linear-gradient(to right, gold, darkorange);
  color: white;
  position: relative;
  overflow: hidden;
  outline: none;
  border: none;
  cursor: pointer;
  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(to right, transparent, white, transparent);
    left: -100%;
    transition: 0.3s;
  }
  &:active {
    box-shadow: 0 0.1rem #3e85f2;
    transform: translateY(0.3rem);
  }
  &:hover {
    &:before {
      left: 100%;
    }
  }
  img {
    width: 1.5rem;
    margin-left: 1rem;
  }
}

// router
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
