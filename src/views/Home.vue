<template>
  <div class="home">
    <div class="navbar">
      <span class="navbar__logo">habit tracker</span>
      <button class="navbar__btn" @click="showLoginWindow" >Login or Register</button>
    </div>
    <div class="main">
      <div class="main__text">
        <h1 class="main__title">Habit tracker</h1>
        <h3 class="main__subtitle">A way to implement good habits and get rid of bad habits</h3>
        <p class="main__info">Choose what you want to learn or get rid of, then try to repeat it for 30 days in a row,
           and then watch the miracles happen.<br /> You're welcome.</p>
      </div>
    </div>
    
    <div v-if="enter" class="login__window" >
        <log @shutTheLoginWindow="shutTheLoginWindow"/>
    </div>   
  </div>
</template>

<script>
// @ is an alias to /src
import Log from '../components/Log'

export default {
  name: 'Home',
  components: {
    Log
  },
  data() {
    return {
      enter: false
    }
  },
  methods: {
    showLoginWindow() {
      this.enter = true;
    },
    shutTheLoginWindow() {
      this.enter = false;
      console.log(this.enter);
    }
  }
}
</script>

<style lang="scss" scoped>

  .home {
    height: 100vh;
    padding: 2rem;
    position: relative;
  }

  .navbar {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    &__logo {
      font-size: 2.3rem;
    }

    &__btn {
      border-radius: 5px;
      padding: .5rem 1rem;
      background-color: transparent;
      letter-spacing: 2px;
      text-transform: lowercase;
      border: 3px solid black;
      cursor: pointer;
    
      &:hover {
        background-color: black;
        color: white;
      }
    }

    &__link {
      font-size: 1rem;
      color: black;
      text-decoration: none;
    
      &:hover {
        color: white;
      }
    }
  }

  .login {
    &__window {
      position: absolute;
      top: 10rem;
      left: 0;
      right: 0;
      z-index: 100;
    }
  }

  .main {
    margin: 3rem 1rem;
    background-image: url(../assets/foto.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    height: 100%;

    &__text {
      background-color: rgba(255, 255, 255, 0.45);
      backdrop-filter: blur(10px);
      color: black;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 50%;
      height: 25rem;
      z-index: 100;
      padding: 1rem 2rem; 
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
    }

    &__title {
      font-size: 3rem;
      margin-bottom: 2rem;
    }

    &__subtitle {
      font-size: 1.8rem;
      margin-bottom: 2rem;
    }

    &__info {
      font-size: 1.2rem;
      line-height: 1.6;
    }
  
  }
</style>

