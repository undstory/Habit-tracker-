<template>
    <div class="nav">
        <span class="nav__logo">habit tracker</span>
        <button class="nav__logout"><router-link to="/" class="nav__logout--link">Log out</router-link></button>
    </div>
</template>

<script>
export default {
    name: 'navbar'
}
</script>

<style lang="scss" scoped>

.nav {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 3rem;
    background-color: rgba(255, 255, 255, 0.55);
    backdrop-filter: blur(10px); 
   
    
    &__logo {
      font-size: 2.3rem;
       margin: 1rem 2rem;
    }

    &__logout {
      border-radius: 5px;
      padding: .5rem 1rem;
      background-color: transparent;
      letter-spacing: 2px;
      text-transform: lowercase;
      border: 3px solid black;
      cursor: pointer;
      margin: 1rem 2rem; 

      &--link {
          text-decoration: none;
          color: #000;

          &:hover {
               color: white;
          }
      }
    
      &:hover {
        background-color: black;
      }
    }
}

</style>