<template>
  <div>
      <p>This is component 2</p>

    </div>
</template>
<script>
  export default {
    name: 'Component2', 
    mounted() {
      console.log(this.$globalVar++)
    }
  }
</script>
<style scoped>

</style>