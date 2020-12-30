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
  margin-top: 10rem;
  @media (max-width: 768px) {
    margin-top: 6rem;
  }
  background: rgb(62, 133, 242);
  background: linear-gradient(
    90deg,
    rgba(62, 133, 242, 1) 0%,
    rgba(100, 160, 253, 1) 100%
  );
  padding: 1rem 0;
  color: #fff;
  text-align: center;
}
</style>
