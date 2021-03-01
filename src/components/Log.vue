<template>
    <div class="log">
        <button class="log__close" @click="shutUp">X</button>
    </div>
</template>

<script>
export default {
    name: 'Log',
    data() {
        return {

        }
    },
    methods: {
        shutUp() {
            this.$emit('shutTheLoginWindow');
        }
    }
}


</script>

<style lang="scss" scoped>

.log {
    border: 3px solid black;
    border-radius: 5px;
    width: 50rem;
    margin: 3rem auto;
    height: 20rem;
    background-color: white;

    &__close {
        border-radius: 5px;
        cursor: pointer; 
        font-size: 1rem;
        font-weight: bold;
        padding: .5rem 1rem;
        background-color: transparent;
        text-transform: lowercase;
        border: 3px solid black;
        float: right;
        margin: 1rem;
    
        &:hover {
            background-color: black;
            color: white;
      }
    }
}


</style>