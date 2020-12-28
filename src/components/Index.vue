<template>
 <div class="test">
   <p class="test__text">
     Heloo
   </p>
 </div>
</template>

<script>
export default {
  name: 'Index'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.test {
  background: red;
  &__text {
    color: white;
  }
}
</style>
