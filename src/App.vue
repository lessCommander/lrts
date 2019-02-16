<template>
  <div id="app">
    <router-view/>
    <home-nav/>
  </div>
</template>

<script>
import HomeNav from './views/HomeNav';

export default {
  components: {
    'home-nav': HomeNav
  }
}
</script>

<style lang="scss">

</style>
