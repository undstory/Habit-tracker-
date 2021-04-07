import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        habits: [{
            id: 1,
            name: "bieg",
        },
        {
            id: 2,
            name: "witaminy"
        },
        {
            id: 3,
            name: "picie wody"
        }]
    }
})