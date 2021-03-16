<template>
    <div class="habit">
        <div class="habit__navbar">
            <h1 class="habit__title">{{ chosenHabit }}</h1>
            <span>Today is: {{ moment().format('LLLL') }}</span>
        </div>

        <h2>Start: {{ moment().format('L') }}</h2>
        <h2>The end: {{ moment().add(30, 'days').calendar() }}</h2>
        
        <div class="habit__form">
            <div>
                <label class="habit__label" name="">1</label>
                <input class="habit__input" type="checkbox" name="" id="">
                <label class="habit__label" name="">2</label>
                <input class="habit__input" type="checkbox" name="" id="">
                <label class="habit__label" name="">3</label>
                <input class="habit__input" type="checkbox" name="" id="">
                <label class="habit__label" name="">4</label>
                <input class="habit__input" type="checkbox" name="" id="">
                <label class="habit__label" name="">5</label>
                <input class="habit__input" type="checkbox" name="" id="">
                <label class="habit__label" name="">6</label>
                <input class="habit__input" type="checkbox" name="" id="">
                <label class="habit__label" name="">7</label>
                <input class="habit__input" type="checkbox" name="" id="">
                <label class="habit__label" name="">8</label>
                <input class="habit__input" type="checkbox" name="" id="">
                <label class="habit__label" name="">9</label>
                <input class="habit__input" type="checkbox" name="" id="">
                <label class="habit__label" name="">10</label>
                <input class="habit__input" type="checkbox" name="" id="">
            </div>
            <div>
                <label class="habit__label" name="">11</label>
                <input class="habit__input" type="checkbox" name="" id="">
                <label class="habit__label" name="">12</label>
                <input class="habit__input" type="checkbox" name="" id="">
                <label class="habit__label" name="">13</label>
                <input class="habit__input" type="checkbox" name="" id="">
                <label class="habit__label" name="">14</label>
                <input class="habit__input" type="checkbox" name="" id="">
                <label class="habit__label" name="">15</label>
                <input class="habit__input" type="checkbox" name="" id="">
                <label class="habit__label" name="">16</label>
                <input class="habit__input" type="checkbox" name="" id="">
                <label class="habit__label" name="">17</label>
                <input class="habit__input" type="checkbox" name="" id="">
                <label class="habit__label" name="">18</label>
                <input class="habit__input" type="checkbox" name="" id="">
                <label class="habit__label" name="">19</label>
                <input class="habit__input" type="checkbox" name="" id="">
                <label class="habit__label" name="">20</label>
                <input class="habit__input" type="checkbox" name="" id="">
            </div>
            <div>
                <label class="habit__label" name="">21</label>
                <input class="habit__input" type="checkbox" name="" id="">
                <label class="habit__label" name="">22</label>
                <input class="habit__input" type="checkbox" name="" id="">
                <label class="habit__label" name="">23</label>
                <input class="habit__input" type="checkbox" name="" id="">
                <label class="habit__label" name="">24</label>
                <input class="habit__input" type="checkbox" name="" id="">
                <label class="habit__label" name="">25</label>
                <input class="habit__input" type="checkbox" name="" id="">
                <label class="habit__label" name="">26</label>
                <input class="habit__input" type="checkbox" name="" id="">
                <label class="habit__label" name="">27</label>
                <input class="habit__input" type="checkbox" name="" id="">
                <label class="habit__label" name="">28</label>
                <input class="habit__input" type="checkbox" name="" id="">
                <label class="habit__label" name="">29</label>
                <input class="habit__input" type="checkbox" name="" id="">
                <label class="habit__label" name="">30</label>
                <input class="habit__input" type="checkbox" name="" id="">
            </div>
        </div>
    
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
    
    line-height: 1.6;

    &__navbar {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding-right: 5rem;
    }

    &__title {
        font-size: 1.8rem;
        padding: 1.2rem;
        text-transform: uppercase;
    }

    &__form {
        margin: 2rem 0;
    }

    &__input {
      background-color: red;
      border-radius: 15px;
      width: 30px;
      height: 30px;
    }
}
</style>
