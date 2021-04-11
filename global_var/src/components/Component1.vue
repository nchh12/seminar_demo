<template>
  <div>
      <p>This is component 1</p>

    </div>
</template>
<script>
  export default {
    name: 'Component1', 
    mounted() {
      console.log(this.$globalVar++)
      this.$foo()
    }
  }
</script>
<style scoped>

</style>
