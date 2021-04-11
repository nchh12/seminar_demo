<template>
  <div>
      <p>This is component 3</p>

    </div>
</template>
<script>
  export default {
    name: 'Component3', 
    mounted() {
      console.log(this.$globalVar++)
    }
  }
</script>
<style scoped>

</style>