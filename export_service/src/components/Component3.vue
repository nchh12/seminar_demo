<template>
  <div>
      <p>This is component 3</p>
      <p>{{test}}</p>
    </div>
</template>
<script>
  import myService from '../services/my.service.js';
  
  export default {
    name: 'Component3', 
    data() {
      return {
        test: myService.myMethod()
      }
    }
  }
</script>
<style scoped>

</style>