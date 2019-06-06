<template>
  <div id="app">
      <Header />
      <Visited />
      <Footer />
  </div>
</template>

<script>

import Header from './components/Header/Header.vue';
import Visited from './components/Visited/Visited.vue';
import Footer from './components/Footer/Footer.vue';

export default {
  name: 'app',
  components: {
    Header,
    Visited,
    Footer
  }
}
</script>

<style>

  body {
    margin: 0;
    padding: 0;
    font-family: 'Libre Franklin', sans-serif;
  }

</style>
