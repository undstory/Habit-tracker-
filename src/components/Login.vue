<template>
    <div class="login">
        <form method="post" class="login__form" @submit.prevent="loginOrRegister">
            <label>Are you a new User?</label> 
            <input type="checkbox" class="login__input" v-model="newUser"/>
            <input type="text" name="name" class="login__input" v-if="newUser" v-model.trim="name" placeholder="Name">
            <input type="email" v-model="email" class="login__input" placeholder="E-mail"/>
            <input type="password" v-model="password" class="login__input" placeholder="Password"/>
            <button type="submit" :loading="loader" class="login__btn" @click="loginOrRegister ">{{ newUser ? 'Register' : 'Login'}}</button>
        </form>
        <div class="error__box"></div>
    </div>
</template>

<script>

import { mapGetters, mapActions } from 'vuex';
import { validationMixin } from 'vuelidate';
import { required, minLength, maxLength, email, password } from 'vuelidate/lib/validators'

export default {
    name: 'Login',
    mixins: [validationMixin],
    data() {
        return {
            newUser: false,
            name: '',
            email: '',
            password: ''
        }
    },
    validations: {
        name: {
            required,
            minLength: minLength(3),
            maxLenth: maxLength(15)
        },
        email: {
            required,
            email
        },
        password: {
            required,
            password
        }
    },
    computed: {
        ...mapGetters(['loader'])
    },
    methods: {

        setName(value) {
            this.name = value;
            this.$v.name.$touch();
        },
        
        register(payload) {
            return this.createNewUser(payload)
        },
        login(payload) {
            return this.signIn(payload)
        },
        showError(error) {
            const errorBox = document.querySelector('.error__box');
            errorBox.innerHTML = error;
            errorBox.style.display = 'block';

            setTimeout(() => {
                errorBox.style.display = 'none';
            }, 5000)
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
                .catch(this.showError);
            
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

.errors {
    border: 3px solid red;
    &__text {
        font-weight: bold;
        color: red;
    }
}

</style>