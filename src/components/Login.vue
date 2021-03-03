<template>
    <div class="login">
        <form method="post" class="login__form" @submit.prevent="loginOrRegister">
            <label>Are you a new User?</label> 
            <input type="checkbox" class="login__input" v-model="newUser"/>
            <input type="text" class="login__input" v-if="newUser" v-model="name" placeholder="Name">
            <input type="email" v-model="email" class="login__input" placeholder="E-mail"/>
            <input type="password" v-model="password" class="login__input" placeholder="Password"/>
            <button type="submit" :loading="loader" class="login__btn" @click="loginOrRegister">{{ newUser ? 'Register' : 'Login'}}</button>
        </form>
    </div>
</template>

<script>

import { mapGetters, mapActions } from 'vuex';

export default {
    name: 'Login',
    data() {
        return {
            newUser: false,
            name: '',
            email: '',
            password: ''
        }
    },
    computed: {
        ...mapGetters(['loader'])
    },
    methods: {
        
        register(payload) {
            return this.createNewUser(payload)
        },
        login(payload) {
            return this.signIn(payload)
        },
        loginOrRegister() {
            let promise;
            const loginPayload = {
                email: this.email,
                password: this.password
            };
            if(this.newUser) {
                promise = this.register({
                name: this.name,
                ...loginPayload    
                })
            } else {
                promise = this.login(loginPayload)
            }
            promise 
                .then(() => {
                    this.$router.push('/MainView')
                    .catch(error => {
                        if(error.name != "NavigationDuplicated") {
                            throw error;
                        }
                    })
                })
                .catch((error) => {
                    this.error = error;
                })
        },
        ...mapActions(['createNewUser', 'signIn']),
    }
}
</script>

<style lang="scss" scoped>

.login {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 1.2rem;

    &__form {
        display: flex;
        flex-direction: column;
        align-items: center;
    } 

    &__input {
        margin: .5rem;
        border: 3px solid black;
        border-radius: 5px;
        padding: .5rem 1rem;
        background-color: transparent;
    }

    &__btn {
        border-radius: 5px;
        cursor: pointer; 
        padding: .5rem 1rem;
        background-color: transparent;
        text-transform: lowercase;
        border: 3px solid black;
        letter-spacing: 2px;
        margin-top: .5rem;

         &:hover {
            background-color: black;
            color: white;
      }
    }    
    
}

</style>