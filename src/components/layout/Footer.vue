<template>
  <footer>
    <div class="container">vladis.lt © 2020</div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
footer {
  margin-top: 4rem;
  background: rgb(252, 163, 24);
  background: linear-gradient(
    90deg,
    rgba(252, 163, 24, 1) 0%,
    rgba(253, 193, 100, 1) 100%
  );
  padding: 1rem 0;
  color: #fff;
  text-align: center;
}
</style>
