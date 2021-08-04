<template>
  <div class="home">
    <div @click="toAuth">
      профиль
    </div>
    <div @click="toSudoku">
      играть
    </div>
    <div @click="toBoard">
      таблица
      &nbsp;
      лидеров
    </div>
    <footer>
<!--      <div>-->
<!--        <div>1</div>-->
<!--        <div>2</div>-->
<!--      </div>-->
      <router-link to="About">
        поддержать
      </router-link>
    </footer>
  </div>
</template>

<script>
import {
  mapGetters,
  mapActions
} from 'vuex'
import router from "../router";
export default {
  name: 'Home',
  data: function () {
    return {

      };
  },
  components: {
  },
  computed: {
    ...mapGetters({
    }),

  },
  methods: {
    ...mapActions({
        }),
    toAuth () {
      router.push('/Auth')
    },
    toSudoku () {
      router.push('/')
    },
    toBoard() {
      router.push('/LeaderBoard')
    }

  },
  mounted() {

  }
}
</script>

<style scoped>
.home{
  color: #434691;

  font-size: 4vh;
  padding-top: 2vw;
  flex-direction: column;
  display: flex;
  position: absolute;
  width: 100%;
  min-height: 100%;
  /*justify-content: center;*/
  box-sizing: border-box;
  align-items: center;
  user-select: none;
  background-color: #F3F1E9;
}
.home>div{
  width: 55vmin;
  border-color: white;
  border-style: solid;
  border-radius: 8px;
  padding: 0 3vmin;
  text-align: center;
  margin-bottom: 1vmin;
}
footer{
  display: flex;
  flex-direction: row;
  font-size: 16px;
  margin-top: auto;
  background-color: #e2e3fb;
  width: 100%;
  padding: 2vmin;
  box-sizing: border-box;
  /*text-align: center;*/
  height: 10vh;
}
footer>div{
  margin-right: 2vmin;
}
</style>