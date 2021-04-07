<template>
    <div class="left">
        <div class="habit__new">
            <p class="habit__name">New habit: </p>
            <input class="habit__input" v-model="newHabit" type="text" />
            <button type="button" class="habit__add" @click="addNewHabit()">Add</button>
        </div>
        <p class="habit__name">List of habits:</p>
        <ul class="habit__list">
            <li class="habit__item" v-for="habit in habits" :key="habit" @click="setThisHabit(habit)"><a class="habit__item--link" >{{ habit.name }}</a></li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'left-panel',
    data() {
        return {
            newHabit: '',
            habits: [
                {
                id: 1,
                name: "bieganie",
                dateOfStart: "07/04/2020",
                dateOfEnd: "07/05/2020",
                inputs :  [ {id: 1, name: "1", done: true}, {id: 2, name: "2", done: true}, {id: 3, name: "3", done: true}, {id: 4, name: "4", done: false}, {id: 5, name: "5", done: false},
                    {id: 6, name: "6", done: false}, {id: 7, name: "7", done: false}, {id: 8, name: "8", done: false}, {id: 9, name: "9", done: false}, {id: 10, name: "10", done: false},
                    {id: 11, name: "11", done: false}, {id: 12, name: "12", done: false}, {id: 13, name: "13", done: false}, {id: 14, name: "14", done: false}, {id: 15, name: "15", done: false},
                    {id: 16, name: "16", done: false}, {id: 17, name: "17", done: false}, {id: 18, name: "18", done: false}, {id: 19, name: "19", done: false}, {id: 20, name: "20", done: false},
                    {id: 21, name: "21", done: false}, {id: 22, name: "22", done: false}, {id: 23, name: "23", done: false}, {id: 24, name: "24", done: false}, {id: 25, name: "25", done: false},
                    {id: 26, name: "26", done: false}, {id: 27, name: "27", done: false}, {id: 28, name: "28", done: false}, {id: 29, name: "29", done: false}, {id: 30, name: "30", done: false}
                    ]
                },
                {
                id: 2,    
                name: "zdrowe jedzenie",
                dateOfStart: "05/04/2020",
                dateOfEnd: "05/05/2020",
                inputs :  [ {id: 1, name: "1", done: true}, {id: 2, name: "2", done: true}, {id: 3, name: "3", done: true}, {id: 4, name: "4", done: true}, {id: 5, name: "5", done: true},
                    {id: 6, name: "6", done: true}, {id: 7, name: "7", done: false}, {id: 8, name: "8", done: false}, {id: 9, name: "9", done: false}, {id: 10, name: "10", done: false},
                    {id: 11, name: "11", done: false}, {id: 12, name: "12", done: false}, {id: 13, name: "13", done: false}, {id: 14, name: "14", done: false}, {id: 15, name: "15", done: false},
                    {id: 16, name: "16", done: false}, {id: 17, name: "17", done: false}, {id: 18, name: "18", done: false}, {id: 19, name: "19", done: false}, {id: 20, name: "20", done: false},
                    {id: 21, name: "21", done: false}, {id: 22, name: "22", done: false}, {id: 23, name: "23", done: false}, {id: 24, name: "24", done: false}, {id: 25, name: "25", done: false},
                    {id: 26, name: "26", done: false}, {id: 27, name: "27", done: false}, {id: 28, name: "28", done: false}, {id: 29, name: "29", done: false}, {id: 30, name: "30", done: false}
                    ]
                }
            ]
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
        },
        setThisHabit(habit) {
            this.$emit('myHabit', habit)
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