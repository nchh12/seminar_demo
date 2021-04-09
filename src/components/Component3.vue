<template>
  <div>
      <p>This is component 3</p>
      <p>{{test}}</p>
      <!-- <p>Global variable: {{this.$globalVar++}}</p> -->
    </div>
</template>
<script>
  import myService from '@/services/my.service.js';
  
  export default {
    name: 'Component2', 
    data() {
      return {
        test: myService.myMethod()
      }
    },
    mounted() {
      console.log(this.$globalVar++)
    }
  }
</script>
<style scoped>

</style>