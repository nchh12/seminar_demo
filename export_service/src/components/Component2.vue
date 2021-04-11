<template>
  <div>
      <p>This is component 2</p>
      <p>{{test}}</p>
    </div>
</template>
<script>
  import myService from '../services/my.service.js';

  export default {
    name: 'Component2', 
    data() {
      return {
        test: myService.myMethod()
      }
    }
  }
</script>
<style scoped>

</style>