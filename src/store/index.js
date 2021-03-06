import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase/app'
import 'firebase/auth'
import '../firebase'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    id: '',
    name: '',
    email: '',
    loading: {
      login: false
    }
  },
  getters: {
    loader(state) {
      return state.loading.login; 
    }
  },
  mutations: {
    setId(state, data) {
      state.id = data;
    },
    beforeAuth(state) {
      state.loading.login = true;
    },
    afterAuth(state, { id, name, email}) {
      state.loading.login = false;
      state.id = id;
      state.name = name;
      state.email = email;
    },
    afterErrorAuth(state) {
      state.loading.login = false;
    }

  },
  actions: {
    createNewUser({ commit }, payload) {
      return new Promise((resolve, reject) => {
        commit('beforeAuth');
        firebase
          .auth()
          .createUserWithEmailAndPassword(payload.email, payload.password)
          .then((response) => {
            commit('afterAuth', {
              id: response.id,
              ...payload
            });
            resolve();
          })
          .catch((error) => {
            commit('afterErrorAuth');
            reject(error.message);
          })
      })
    },
    signIn({ commit }, payload) {
      return new Promise((resolve, reject) => {
        commit('beforeAuth');
        firebase
          .auth()
          .signInWithEmailAndPassword(payload.email, payload.password)
          .then((response) => {
            commit('afterAuth', {
              id: response.id,
              ...payload
            });
            resolve();
          })
          .catch((error) => {
            commit('afterErrorAuth');
            reject(error.message);
          })
      })
    }
  }
  
})
