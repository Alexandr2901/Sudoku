<template>
<div class="About">
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
  <div class="info">
    <div class="info-title">
      Если вы поддержите данный проект то произойдут следующие улучшения
    </div>
    <ul>
      <li>
        Увеличится количество полей судоку, и они будут генерироватся автоматически
      </li>
      <li>
        Снимутся серверные ограничения на количество зарегестрированных пользователей
      </li>
<!--      <li>-->
<!--        Повысится время работы и отказоустойчивость серверной части-->
<!--      </li>-->
    </ul>
    <div>
      тут будет
      <router-link to="About">
        ссылка для поддержки
      </router-link>
    </div>
  </div>
</div>
</template>

<script>
import router from "../router";

export default {
  name: "About",
  data: function () {
    return {}
  },
  methods: {
    back() {
      router.go(-1)
    }
  }
}
</script>

<style scoped>
.About{
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 75vh;
  font-size: 16px;
}
.info{
  max-width: 80vw;
}

.info-title{
  font-size: 20px;
}

.back{
  position: absolute;
  top: 1vmin;
  left: 1vmin;
}
</style>