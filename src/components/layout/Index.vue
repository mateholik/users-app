<template>
  <div>
    <div class="wrap">
      <userPreview v-for="user in allUsers" :key="user.id" :user="user" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import userPreview from "./../sections/userPreview";
export default {
  name: "Index",
  components: {
    userPreview,
  },
  computed: mapGetters(["allUsers"]),
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.wrap {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -1.5rem;
}
</style>
