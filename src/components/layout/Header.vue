<template>
  <header>
    <div class="top">
      <div class="container">
        <router-link to="/" class="top__logo">Users App</router-link>
        <a class="top__link" href="#">
          GitHub Repo
          <img src="./../../assets/icons/link.svg" alt="link" />
        </a>
      </div>
    </div>
    <div class="container">
      <h1 v-if="$route.path === '/'">Our Team</h1>
      <h1 v-else>
        <router-link to="/" class="back">
          <img src="./../../assets/icons/home.svg" alt />
        </router-link>Member Information
      </h1>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.top {
  background: rgb(62, 133, 242);
  background: linear-gradient(
    90deg,
    rgba(62, 133, 242, 1) 0%,
    rgba(100, 160, 253, 1) 100%
  );

  padding: 0.5rem 0;
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__logo,
  &__link {
    font-size: 3rem;
    color: #fff;
    text-decoration: none;
  }
  &__link {
    font-size: 1.8rem;
    display: flex;
    align-items: center;
    img {
      width: 2rem;
      height: auto;
      margin-left: 1rem;
    }
  }
}
h1 {
  position: relative;
  margin: 4rem 0;
  text-align: center;
  .back {
    position: absolute;
    left: 0;
    top: 50%;
    width: 6rem;
    transition: 0.2s;
    transform: translateY(-50%);
    &:hover {
      transform: scale(1.1) translateY(-30%);
    }
  }
  img {
    display: block;
    width: 100%;
    height: 100%;
  }
}
</style>
