<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
    </div>
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

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
