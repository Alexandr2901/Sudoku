<template>
  <div class="About">
    <svg aria-hidden="true" class="back" focusable="false"
         height="2em" preserveAspectRatio="xMidYMid meet" style="-ms-transform: rotate(180deg); -webkit-transform: rotate(180deg); transform: rotate(180deg);"
         viewBox="0 0 512 512" width="2em"
         xmlns="http://www.w3.org/2000/svg"
         xmlns:xlink="http://www.w3.org/1999/xlink" @click="back">
      <path d="M256.25 16.042c-132.548 0-240 107.451-240 240s107.452 240 240 240s240-107.452 240-240s-107.45-240-240-240zM403.328 403.12A207.253 207.253 0 1 1 447.917 337a207.364 207.364 0 0 1-44.589 66.12z"
            fill="#434691"/>
      <path d="M239.637 164.987l75.053 75.054H128.137v32H314.69l-75.053 75.054l22.627 22.627l113.681-113.681L262.264 142.36l-22.627 22.627z"
            fill="#434691"/>
    </svg>
    <div class="info">
<!--      <h3>-->
<!--        Информация-->
<!--      </h3>-->
      <div>
        если вы хотите поделится своими впечатлениями, то можете оставить отзыв на
        <a href="">
          ресурсе dtf
        </a>
      </div>
      <div>
        ссылки на исходный код
        <a href="https://github.com/Alexandr2901/Sudoku">
          front-end
        </a>
        {{ '\xa0' }}{{ '\xa0' }}{{ '\xa0' }}
        <a href="https://gitlab.com/sanegg29/sudoku">
          back-end
        </a>
      </div>
    </div>
    <br>
    <div class="support">
      <div class="support-title">
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
        <a href="">
          ссылка для поддержки
        </a>
      </div>
      <!--    <div>-->
      <!--      <br>-->
      <!--      -->
      <!--    </div>-->
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
      router.push('/Home')
    }
  }
}
</script>

<style scoped>
.About {
  display: flex;
  flex-direction: column;
  /*justify-content: center;*/
  padding: 10vmin;
  /*align-items: center;*/
  min-height: 75vh;
  /*font-size: 2vmin;*/
}

/*.info{*/
/*  text-align: left;*/
/*}*/
.support {
  max-width: 80vw;
}

.support-title {
  font-size: 20px;
}

.back {
  position: absolute;
  top: 1vmin;
  left: 1vmin;
}
</style>