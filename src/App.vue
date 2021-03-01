<template>
    <div id="app">  
          <router-view />
    </div>    
</template>

<script>
export default {
  name: 'App'
};
</script>

<style lang="scss" scoped>

  #app {
    max-width: 1440px;
    margin: 0 auto;
    font-family: 'Jost', sans-serif;
  }

</style>