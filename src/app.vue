<template>
  <div id="app">
    <transition>
      <router-view></router-view>
    </transition>
  </div>
</template>
<script>
  export default {
    name: 'app',
    components: {
      // 'app-content': Content
    },

    data() {
      return {
        message: 'Hello Vue!'
      }
    }
  }
</script>
<style>
  #app {
    width: 100%;
    min-height: 100%;
  }
</style>
