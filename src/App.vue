<template>
  <div id="app">
    <router-view/>
    <mini-player/>
  </div>
</template>

<script>
import MiniPlayer from './views/MiniPlayer';

export default {
  components: {
    'mini-player': MiniPlayer
  }
}
</script>

<style lang="scss">

</style>
