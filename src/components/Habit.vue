<template>
    <div class="habit">
        <h1 class="habit__title">{{ chosenHabit }}</h1>
        <button type="button">Start</button>
        <h2>Start: {{ moment().format('llll') }}</h2>
    </div>
</template>

<script>
export default {
    name: "Habit",
    props: {
        chosenHabit: String
    },
 
    computed: {
        dateOfStart() {
            const date = new Date();
            return date;
        }
    }
}
</script>
<style lang="scss" scoped>
.habit {
    background-color: #303030;;
    color: #fff;
    height: 100vh;
    padding-top: 5rem;
    padding-left: 2rem;

    &__title {
        font-size: 1.8rem;
        padding: 1.2rem;
    }
}
</style>
