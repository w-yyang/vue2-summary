<template>
  <div id="app">
    <Header />
    <div class="ctx-container">
      <Aside />
      <Content />
    </div>
  </div>
</template>

<script>
import Header from './components/header.vue';
import Aside from './components/aside.vue';
import Content from './components/content.vue';

export default {
  components: {
    Header,
    Aside,
    Content
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.ctx-container {
  display: flex;
  flex-wrap: nowrap;
}

a {
  color: #000;
}

a:active {
  color: #000;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
