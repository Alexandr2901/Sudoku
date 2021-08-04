<template>
  <div class="Auth">
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true"
         focusable="false" width="2em" height="2em"
         class="back" @click="back"
         style="-ms-transform: rotate(180deg); -webkit-transform: rotate(180deg); transform: rotate(180deg);"
         preserveAspectRatio="xMidYMid meet" viewBox="0 0 512 512">
      <path fill="#434691"
            d="M256.25 16.042c-132.548 0-240 107.451-240 240s107.452 240 240 240s240-107.452 240-240s-107.45-240-240-240zM403.328 403.12A207.253 207.253 0 1 1 447.917 337a207.364 207.364 0 0 1-44.589 66.12z"/>
      <path fill="#434691"
            d="M239.637 164.987l75.053 75.054H128.137v32H314.69l-75.053 75.054l22.627 22.627l113.681-113.681L262.264 142.36l-22.627 22.627z"/>
    </svg>
    <div v-if="!getToken" class="inputs">
      <h3 v-if="isRegistration">
        регистрация
      </h3>
      <h3 v-else>
        вход
      </h3>
      <input v-if="isRegistration" v-model="name" placeholder="name">
      <input v-model="email" placeholder="email">
      <input v-model="password" placeholder="password">
      <button @click="register" v-if="isRegistration">
        зарегистрироваться
      </button>
      <button @click="enter" v-else>
        войти
      </button>
      <div class="change" @click="isRegistration = !isRegistration" v-if="!isRegistration">
        регистрация
      </div>
      <div class="change" @click="isRegistration = !isRegistration"  v-else>
        войти
      </div>
    </div>
    <div v-else>
      <div style="max-width: 75vw" v-if="getUser">
        Вы зашли как:
        {{getUser.name}}
      </div>
      <button @click="logOut">
        выйти
      </button>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import router from "../router";

export default {
  name: "Auth",
  data: function () {
    return {
      name:'examplename',
      email:'example@mail.ru',
      password:'examplepassword',
      isRegistration: true
    }
  },
  computed: {
    ...mapGetters({
      getToken: 'dataManage/getToken',
      getUser: 'dataManage/getUser',
    })
  },
  methods: {
    ...mapActions({
      signUp: 'dataManage/signUp',
      signIn: 'dataManage/signIn',
      logOut: 'dataManage/logOut'

    }),
    back() {
      router.push('/Home')
    },
    register() {
      this.signUp([this.name,this.email,this.password]).then(()=>{
        this.signIn([this.email,this.password]).then(()=>{
          router.push('Sudoku')
        })
      }).catch(error => {
        console.log(error.response.data.errors)
        if (error.response.data.errors) {
          if (error.response.data.errors.password) {
            this.password = ''
          }
          if (error.response.data.errors.email) {
            this.email = ''
          }
        }
      })
    },
    enter() {
      this.signIn([this.email,this.password]).then(()=>{
        router.push('Sudoku')
      })
    }
  }
}
</script>

<style scoped>
.Auth{
  color: #434691;
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #F3F1E9;
}
.inputs{
  display: flex;
  flex-direction: column;
  padding: 0.7vmin;
  background: #FFFFFF;
  border-radius: 0.8vmin;
  justify-content: center;
  align-items: center;
}
input{
  font-size: 3vh;
}
button{
  font-size: 2.5vh;
  width: 100%;
  min-height: 5vh;
  border: none;
  /*background-color: #f5f5f5;*/
  background-color: #e2e3fb;
  color: #434691;


}
h3{
  width: 100%;
  text-align: center;
}
.change{
  margin-top: 2vh;
  margin-bottom: 1vh;
  user-select: none;
  color: #ee5b3c;
}
.back{
  position: absolute;
  top: 1vmin;
  left: 1vmin;
}
</style>