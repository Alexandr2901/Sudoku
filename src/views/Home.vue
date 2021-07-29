<template>
  <div class="home">
    <div @click="toAuth">
      профиль
    </div>
    <div @click="toSudoku">
      начать
    </div>
    <div>
      таблица лидеров
    </div>
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
      router.push('Auth')
    },
    toSudoku () {
      router.push('Sudoku')
    }

  },
  mounted() {

  }
}
</script>

<style scoped>
.home{
  font-size: 4vmin;
  padding: 2vw;
  flex-direction: column;
  display: flex;
  position: absolute;
  width: 100%;
  min-height: 100%;
  /*justify-content: center;*/
  box-sizing: border-box;
  align-items: center;
  background-color: #F3F1E9;
}
</style>