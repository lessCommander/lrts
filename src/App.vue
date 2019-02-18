<template>
  <div id="app">
    <router-view class="app-body"/>
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
.app-body{
  margin-bottom: 70px;
}
</style>
