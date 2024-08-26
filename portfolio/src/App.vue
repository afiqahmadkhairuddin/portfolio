<template>
  <div id="app">
    <nav class="navbar">
      
    </nav>
    <section class="section">
      <div class="container" style="text-align: right;">
        
        <ThemeToggle />
      </div>
    </section>
  </div>
  <HelloWorld />
  
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import ThemeToggle from './components/ThemeToggle.vue';


export default {
  name: 'App',
  components: {
    HelloWorld,
    ThemeToggle,
  }
}
</script>

<style>
@import './assets/theme.css';
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
