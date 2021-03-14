<template>
   <div class="dashboard"  >
        <Navbar class="dashboard__navbar" />
        <left-panel class="dashboard__aside" @myHabit="myHabit" />
        <component :is="currentView" :chosenHabit="chosenHabit" class="dashboard__background" />
    </div> 
</template>

<script>
import Navbar from '../components/Navbar'
import LeftPanel from '../components/LeftPanel'
import Background from '../components/Background'
import Habit from '../components/Habit'

export default {
    name: 'main-view',
    components: {
        Navbar,
        LeftPanel,
        Background,
        Habit
    },
    data() {
      return {
          currentView: Background,
          chosenHabit: ''
      }
  },
  methods: {
      myHabit(habit) {
       
        this.currentView = Habit;
         this.chosenHabit = habit; 
        console.log(`Wybrany habit to ${this.chosenHabit}`);
      }
  }
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

    &__background {
        position: absolute;
        width: 75%;
        top: 0; 
        left: 25%; 
    }
    
}
</style>