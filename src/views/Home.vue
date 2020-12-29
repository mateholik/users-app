<template>
  <div>
    <h1>Our Team</h1>
    <Index />
  </div>
</template>

<script>
// @ is an alias to /src
import Index from "@/components/Index.vue";

export default {
  name: "Home",
  components: {
    Index,
  },
};
</script>

<style scoped>
h1 {
  margin: 4rem 0;
  text-align: center;
}
</style>
