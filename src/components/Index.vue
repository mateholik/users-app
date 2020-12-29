<template>
  <div>
    <h1>Our Team</h1>
    <div class="wrap">
      <userShort v-for="user in allUsers" :key="user.id" :user="user" />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import userShort from "./users/userShort";
export default {
  name: "Index",
  components: {
    userShort,
  },
  mounted() {
    this.fetchUsers();
    this.fetchUsersPhotos();
  },
  computed: mapGetters(["allUsers"]),
  methods: {
    ...mapActions(["fetchUsers", "fetchUsersPhotos"]),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h1 {
  margin-bottom: 3rem;
  text-align: center;
}
.wrap {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -1.5rem;
}
</style>
