<template>
  <div id="app">
    <title>Gil's Page</title>
    <h1>Gil's Page:</h1><br>
    <RegForm/>
  </div>
</template>

<script>
import RegForm from './components/RegForm.vue'

export default {
  name: 'App',
  components: {
    RegForm
  }
}
</script>

<style>
#app {
  text-align: center;
  background-image: url(./assets/background.jpg);
  background-size: cover;
  font-family: Comic Sans MS, Comic Sans, cursive;
  color: rgb(68, 51, 122);
  
}
</style>
