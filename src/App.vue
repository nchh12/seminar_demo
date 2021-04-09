<template>
  <div>
    <Component1/>
    <Component2/>
    <Component3/>
  </div>
</template>

<script>
import Component1 from './components/Component1.vue'
import Component2 from './components/Component2.vue'
import Component3 from './components/Component3.vue'

export default {
  name: 'App',
  components: {
    Component1,
    Component2,
    Component3
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
