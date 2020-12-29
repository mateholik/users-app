<template>
  <div>
    <h1>
      <router-link to="/" class="back">
        <img src="./../assets/icons/home.svg" alt />
      </router-link>Member Information
    </h1>
    <userFull />
  </div>
</template>

<script>
// @ is an alias to /src
import userFull from "@/components/users/userFull.vue";

export default {
  name: "UserPage",
  components: {
    userFull,
  },
};
</script>
<style scoped lang="scss">
h1 {
  position: relative;
  margin: 4rem 0;
  text-align: center;
}
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
  img {
    display: block;
    width: 100%;
    height: 100%;
  }
}
</style>
