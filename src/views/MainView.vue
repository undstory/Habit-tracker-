<template>
   <div class="dashboard">
        <Navbar class="dashboard__navbar" />
        <left-panel class="dashboard__aside" />
    </div> 
</template>

<script>
import Navbar from '../components/Navbar'
import LeftPanel from '../components/LeftPanel'

export default {
    name: 'main-view',
     components: {
    Navbar,
    LeftPanel
  },
}
</script>

<style lang="scss" scoped>
.dashboard {
    background-color: #303030;
    height: 1000vh;
    position: relative;

    &__navbar {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 100;
    }

    &__aside {
        position: absolute;
        top: 0;
        left: 0; 
        width: 25%;
    }

    
}
</style>