<template>
    <div class="left">
        <div class="habit__new">
            <p class="habit__name">New habit: </p>
            <input class="habit__input" v-model="newHabit" type="text" />
            <button type="button" class="habit__add" @click="addNewHabit()">Add</button>
        </div>
        <p class="habit__name">List of habits:</p>
        <ul class="habit__list">
            <li class="habit__item" v-for="habit in habits" :key="habit"><a class="habit__item--link">{{ habit }}</a></li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'left-panel',
    data() {
        return {
            newHabit: '',
            habits: []
        }
    },
    methods: {
        addNewHabit() {
            if(this.newHabit === '') {
                return false;
            } else {
                this.habits.push(this.newHabit);
                this.newHabit = '';
                console.log(this.habits);
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.left {
    background-color: #003473;
    color: #fff;
    height: 1000%;
    position: relative;
    padding-top: 5rem;
    padding-left: 2rem;
}

.habit {
    &__new {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }
    &__name {
        margin-bottom: 1rem;
        font-size: 1.3rem;
    }

    &__input {
        border-radius: 5px;
        padding: .5rem 1rem;
        background-color: transparent;
        letter-spacing: 2px;
        text-transform: lowercase;
        border: 3px solid #00B1E8;
        color: #fff;
    }

    &__add {
        border-radius: 5px;
        padding: .4rem 1rem;
        background-color: #00B1E8;
        letter-spacing: 2px;
        text-transform: lowercase;
        border: none;
        cursor: pointer;
        margin: 1rem 0 2rem;
        border: 3px solid transparent;

        &:hover {
            background-color: transparent;
            color: #fff;
            border-color: #00B1E8;
        }
    }

    &__list {
        list-style-type: disc;
        margin-left: 2rem;
    }

    &__item {
        padding: 1rem .5rem;
        font-size: 1.1rem;

        &--link {
            cursor: pointer;

            &:hover {
                border-bottom: 2px solid #00b1e8;
            }
        }
    }
}
</style>