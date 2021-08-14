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
      <input v-bind:class="{wrong: wrong.name}" v-if="isRegistration" v-model="name" placeholder="name">
      <input v-bind:class="{wrong: wrong.email}" v-model="email" placeholder="email">
      <input v-bind:class="{wrong: wrong.password}" v-model="password" placeholder="password">
      <button @click="register" v-if="isRegistration">
        зарегистрироваться
      </button>
        <button @click="enter" v-else >
          войти
        </button>
<!--      <br>-->
      <div style="font-size: 3vh; margin: 1.3vh 0">
        войти через социальные сети
      </div>
<!--      <br>-->
      <div class="socials">
        <svg
            class="socials-icon"
            @click="auth('https://sudokueasy.herokuapp.com/api/login/vkontakte')"
            xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
            aria-hidden="true" role="img" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1200 1200"><path d="M0 0v1200h1200V0H0zm532.69 320.874c33.977-.352 67.21 3.415 83.423 3.882c60.1 1.73 70.714 32.127 69.945 57.129c-1.124 36.617-24.683 191.51 18.971 206.616c63.609-34.014 106.265-139.659 137.328-206.616c15.714-33.868 13.229-35.551 49.438-35.596l143.848-.22c34.641-.043 33.289-1.258 44.386 12.891c25.81 32.908-81.447 169.794-116.09 207.642c-63.929 69.847-26.63 96.895-16.332 106.494c47.709 44.483 93.809 90.611 122.461 133.154c22.778 33.822 13.37 65.312-15.602 66.504l-154.248 6.372c-51.186 2.104-130.776-89.652-143.48-109.644c-10.274-16.49-59.789-37.157-64.453 4.979l-6.52 58.813c-4.734 42.041-35.775 41.06-60.277 42.113c-169.669 7.301-227.45-57.297-312.892-152.637c-62.621-88.56-122.38-177.629-171.899-284.326c-14.822-31.938-22.673-55.367-24.683-80.2c24.916-19.474 112.373-11.086 171.094-12.378c16.061-.354 26.898 8.849 35.376 27.173c33.081 71.513 69.159 141.739 116.895 203.833c20.789 19.148 39.167 26.189 48.34-12.743c5.326-.49 4.898-64.964 5.2-113.6c.207-33.394-3.716-73.441-60.278-91.919c11.441-29.989 56.365-37.263 100.049-37.716z" fill="#434691"/></svg>

        <svg
            class="socials-icon"
            @click="auth('https://sudokueasy.herokuapp.com/api/login/vkontakte')"
            xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
            aria-hidden="true" role="img" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385c.6.105.825-.255.825-.57c0-.285-.015-1.23-.015-2.235c-3.015.555-3.795-.735-4.035-1.41c-.135-.345-.72-1.41-1.23-1.695c-.42-.225-1.02-.78-.015-.795c.945-.015 1.62.87 1.845 1.23c1.08 1.815 2.805 1.305 3.495.99c.105-.78.42-1.305.765-1.605c-2.67-.3-5.46-1.335-5.46-5.925c0-1.305.465-2.385 1.23-3.225c-.12-.3-.54-1.53.12-3.18c0 0 1.005-.315 3.3 1.23c.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23c.66 1.65.24 2.88.12 3.18c.765.84 1.23 1.905 1.23 3.225c0 4.605-2.805 5.625-5.475 5.925c.435.375.81 1.095.81 2.22c0 1.605-.015 2.895-.015 3.3c0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" fill="#434691"/></g></svg>
      </div>
      <div class="change" @click="isRegistrxation = !isRegistration" v-if="!isRegistration">
        регистрация
      </div>
      <div class="change" @click="isRegistration = !isRegistration"  v-else>
        войти
      </div>
    </div>
    <div v-else>
      <div style="max-width: 75vw" v-if="getUser" class="inputs">
        <input v-bind:class="{wrong: wrong.name}"  @input="changed = true" v-model="user.name" placeholder="name">
        <input v-bind:class="{wrong: wrong.email}" @input="changed = true" v-model="user.email" placeholder="email">
      </div>
      <button v-if="changed" @click="updateUser">
        обновить данные
      </button>
      <button @click="logOut">
        выйти
      </button>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters, mapMutations} from "vuex";
import router from "../router";

export default {
  name: "Auth",
  data: function () {
    return {
      name:'examplename',
      email:'example@mail.ru',
      password:'examplepassword',
      isRegistration: true,
      changed:false,
      user:{
        name:'',
        email:''
      },
      wrong: {
        name:false,
        email:false,
        password:false,
      }
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
      logOut: 'dataManage/logOut',
      update: 'dataManage/update',
      check: 'dataManage/check',
    }),
    ...mapMutations({
      setToken: 'dataManage/SET_TOKEN',
    }),
    auth(url) {
      window.open(url)
    },
    back() {
      router.push('/Home')
    },
    register() {
      this.signUp([this.name,this.email,this.password]).then(()=>{
        this.signIn([this.email,this.password]).then(()=>{
          router.push('Sudoku')
          this.user.name = this.getUser.name
          this.user.email = this.getUser.email
        })
      }).catch(error => {
        if (error.response.data.errors) {
          if (error.response.data.errors.password) {
            this.wrong.password = true
            setTimeout(()=>{
              this.wrong.password = false
            },2500)
          }
          if (error.response.data.errors.email) {
            this.wrong.email = true
            setTimeout(()=>{
              this.wrong.email = false
            },2500)
          }
        }
      })
    },
    enter() {
      this.signIn([this.email,this.password]).then(()=>{
        router.push('Sudoku')
        this.user.name = this.getUser.name
        this.user.email = this.getUser.email
      }).catch(error => {
        console.log(error.response.data.errors)
        if (error.response.data.errors) {
          if (error.response.data.errors.password) {
            this.wrong.password = true
            setTimeout(()=>{
              this.wrong.password = false
            },2500)
          }
          if (error.response.data.errors.email) {
            this.wrong.email = true
            setTimeout(()=>{
              this.wrong.email = false
            },2500)
          }
        }
      })
    },
    updateUser() {
      this.update(this.user).then(()=>{
        this.user.name = this.getUser.name
        this.user.email = this.getUser.email
        this.changed = false
      }).catch(error => {
        console.log(error.response.data.errors)
        if (error.response.data.errors) {
          if (error.response.data.errors.name) {
            this.wrong.name = true
            setTimeout(()=>{
              this.wrong.name = false
            },2500)
          }
          if (error.response.data.errors.email) {
            this.wrong.email = true
            setTimeout(()=>{
              this.wrong.email = false
            },2500)
          }
        }
      })
    },
    socialiteAnswer(event) {
      if (event.origin != 'https://sudokueasy.herokuapp.com') {
        // что-то прислали с неизвестного домена - проигнорируем..
        return;
      }
      this.setToken(event.data.token)
        this.check().then(()=>{
          this.user.name = this.getUser.name
          this.user.email = this.getUser.email
        })
    }
  },
  created() {
    if (this.getToken) {
      this.user.name = this.getUser.name
      this.user.email = this.getUser.email
    }
    window.addEventListener("message", this.socialiteAnswer);
  },
  beforeDestroy() {
    document.removeEventListener('message', this.socialiteAnswer)
    document.removeEventListener('message', this.socialiteAnswer)

  },
}
</script>

<style scoped>
.Auth{
  color: #434691;
  font-size: 2.5vh;
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
  color:#434691;
  border-color: rgb(133, 133, 133);
  transition: all 1s linear;
}
.wrong{
  color: red;
  transform: scale3d(1.1,1.1,1.1);
  border-color: red;
}
button{
  font-size: 2.5vh;
  width: 100%;
  min-height: 5vh;
  border: none;
  margin-top: 1.5vmin;
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
.socials{
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: left;
}
.socials-icon{
  height: 5vh;
  margin-left: 2vw;
}
</style>