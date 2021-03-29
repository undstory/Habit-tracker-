<template>
    <div class="habit">
        <div class="habit__navbar">
            <div>
                <h1 class="habit__title">{{ chosenHabit }}</h1>
                <div class="progress" >
                    <span class="progress__bar" :style="updateProgressBar"></span>
                </div>
            </div>
            <span class="habit__today">Today is: {{ moment().format('LLLL') }}</span>
        </div>

        <h2>Start: {{ moment().format('L') }}</h2>
        <h2>The end: {{ moment().add(30, 'days').calendar() }}</h2>
        
        <div class="habit__inputs">
            <ul v-for="input of inputs" :key="input.id">
                <li class="habit__item">{{ input.name }} <input type="checkbox" v-model ="input.done" @change="updateInputs(input)" class="habit__input" /></li> 
            </ul>            
        </div>

        <div class="habit__resume">
            You have already completed {{ percent }} percent of the plan !
        </div>

        <div class="habit__form">
            <!-- <div>
                <label class="habit__label" name="1">1</label>
                <input class="habit__input" @change="changeInput" v-model="input" type="checkbox" name="1" id="">
                <label class="habit__label" name="2">2</label>
                <input class="habit__input" @change="changeInput"  type="checkbox" v-model="input" name="2" id="">
                <label class="habit__label" name="3">3</label>
                <input class="habit__input"   type="checkbox" name="3" id="">
                <label class="habit__label" name="4">4</label>
                <input class="habit__input"  type="checkbox" name="4" id="">
                <label class="habit__label" name="5">5</label>
                <input class="habit__input" type="checkbox" name="5" id="">
                <label class="habit__label" name="6">6</label>
                <input class="habit__input"  type="checkbox" name="6" id="">
                <label class="habit__label" name="7">7</label>
                <input class="habit__input"   type="checkbox" name="7" id="">
                <label class="habit__label" name="8">8</label>
                <input class="habit__input"  type="checkbox" name="8" id="">
                <label class="habit__label" name="9">9</label>
                <input class="habit__input"  type="checkbox" name="9" id="">
                <label class="habit__label" name="10">10</label>
                <input class="habit__input"  type="checkbox" name="10" id="">
            </div>
            <div>
                <label class="habit__label" name="11">11</label>
                <input class="habit__input" type="checkbox" name="11" id="">
                <label class="habit__label" name="12">12</label>
                <input class="habit__input" type="checkbox" name="12" id="">
                <label class="habit__label" name="13">13</label>
                <input class="habit__input" type="checkbox" name="13" id="">
                <label class="habit__label" name="14">14</label>
                <input class="habit__input" type="checkbox" name="14" id="">
                <label class="habit__label" name="15">15</label>
                <input class="habit__input" type="checkbox" name="15" id="">
                <label class="habit__label" name="16">16</label>
                <input class="habit__input" type="checkbox" name="16" id="">
                <label class="habit__label" name="17">17</label>
                <input class="habit__input" type="checkbox" name="17" id="">
                <label class="habit__label" name="18">18</label>
                <input class="habit__input" type="checkbox" name="18" id="">
                <label class="habit__label" name="19">19</label>
                <input class="habit__input" type="checkbox" name="19" id="">
                <label class="habit__label" name="20">20</label>
                <input class="habit__input"  type="checkbox" name="20" id="">
            </div>
            <div>
                <label class="habit__label" name="21">21</label>
                <input class="habit__input" type="checkbox" name="21" id="">
                <label class="habit__label" name="22">22</label>
                <input class="habit__input" type="checkbox" name="22" id="">
                <label class="habit__label" name="23">23</label>
                <input class="habit__input" type="checkbox" name="23" id="">
                <label class="habit__label" name="24">24</label>
                <input class="habit__input" type="checkbox" name="24" id="">
                <label class="habit__label" name="25">25</label>
                <input class="habit__input" type="checkbox" name="25" id="">
                <label class="habit__label" name="26">26</label>
                <input class="habit__input" type="checkbox" name="26" id="">
                <label class="habit__label" name="27">27</label>
                <input class="habit__input" type="checkbox" name="27" id="">
                <label class="habit__label" name="28">28</label>
                <input class="habit__input" type="checkbox" name="28" id="">
                <label class="habit__label" name="29">29</label>
                <input class="habit__input" type="checkbox" name="29" id="">
                <label class="habit__label" name="30">30</label>
                <input class="habit__input" type="checkbox" name="30" id="">
            </div> -->
        </div>
       
    
    </div>
</template>

<script>
export default {
    name: "Habit",
    props: {
        chosenHabit: String
    },
    data() {
        return {
            progressBarValue: 0,
            percent: 0,
            inputs: [ {id: 1, name: "1", done: false}, {id: 2, name: "2", done: false}, {id: 3, name: "3", done: false}, {id: 4, name: "4", done: false}, {id: 5, name: "5", done: false},
            {id: 6, name: "6", done: false}, {id: 7, name: "7", done: false}, {id: 8, name: "8", done: false}, {id: 9, name: "9", done: false}, {id: 10, name: "10", done: false},
            {id: 11, name: "11", done: false}, {id: 12, name: "12", done: false}, {id: 13, name: "13", done: false}, {id: 14, name: "14", done: false}, {id: 15, name: "15", done: false},
            {id: 16, name: "16", done: false}, {id: 17, name: "17", done: false}, {id: 18, name: "18", done: false}, {id: 19, name: "19", done: false}, {id: 20, name: "20", done: false},
            {id: 21, name: "21", done: false}, {id: 22, name: "22", done: false}, {id: 23, name: "23", done: false}, {id: 24, name: "24", done: false}, {id: 25, name: "25", done: false},
            {id: 26, name: "26", done: false}, {id: 27, name: "27", done: false}, {id: 28, name: "28", done: false}, {id: 29, name: "29", done: false}, {id: 30, name: "30", done: false}
            ],
            checkedInputsArray: []
        }
    },
 
    computed: {
        dateOfStart() {
            const date = new Date();
            return date;
        },
        updateProgressBar() {
            return { width: this.progressBarValue + 'rem'};
        },

 
     
           
       
    },
    methods: {
           
         updateInputs(input) {
           if(input.done == true) {
             this.progressBarValue +=1;
           } else {
             this.progressBarValue -=1;
           }

           this.updatePercent(); 
       },

              updatePercent() {

            this.percent = ((parseInt(this.progressBarValue)/30)*100).toFixed(0); 
        
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

    &__today {
        align-self: flex-start;
    }

    &__title {
        font-size: 1.8rem;
        padding: 1.2rem;
        text-transform: uppercase;
    }

    &__form {
        margin: 2rem 0;
    }

    &__inputs {
        display: flex;
        flex-direction: row;
        max-width: 33rem;
        flex-wrap: wrap;
        margin: 2rem 0;
    }

    &__input {
        width: 30px;
        height: 30px;
    }

    &__item {
        margin: .5rem .25rem;
    }

    // &__input {
    //   background-color: red;
    //   border-radius: 15px;
    //   width: 30px;
    //   height: 30px;
    // }
}

.progress {
    
        background-color: gray;
        border-radius: 50px;
        height: 2rem;
        width: 30rem;
        margin-bottom: 2rem;

        &__bar {
            display: block;
            background-color: orange;
            width: 0;
            height: 100%; 
            border-radius: 50px;
        }
    
}
</style>
