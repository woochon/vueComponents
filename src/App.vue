<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import './commen/css/index.scss';
export default {
  name: 'App'
};
</script>

<style>
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    list-style: none;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
