<template>
  <div class="LeaderBoard">
  <div v-if="board" class="board">
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
    <div class="user">
      <div>место</div>
      <div>имя</div>
      <div>рекорд</div>
    </div>
    <div v-for="user in board" :key="user.id" class="user">
      <div>{{user.rank}}</div>
      <div>{{user.name}}</div>
      <div>{{user.score}}</div>
    </div>
  </div>
  </div>
</template>

<script>
import {mapActions} from "vuex";
import router from "../router";

export default {
  name: "LeaderBoard",
  data: function () {
    return {
      board:null,
    }
  },
  methods: {
    ...mapActions({
      pullLeaderBoard: 'dataManage/pullLeaderBoard',
    }),
    back() {
      router.push('/Home')
    },
  },
  created() {
    this.pullLeaderBoard().then(res=>{
      this.board = res.data
    })
  }
}
</script>

<style scoped>
.LeaderBoard{
  background-color: #F3F1E9;
  width: 100vw;
  min-height: 93vh;
  display: flex;
  justify-content: center;
  padding-top: 7vh;
  /*align-items: center;*/

}
.board{
  /*padding: 5vmin;*/
  /*display: grid;*/
  /*flex-direction: column;*/
  /*justify-content: center;*/
  /*align-items: center;*/
}
.user{
  border-color: white;
  border-style: solid;
  border-radius: 8px;
  padding: 0 3vw 0 3vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: 65vw;
  /*border: black 1px solid;*/
}
.user>div{
  padding: 1vmin;
  overflow: hidden;
  word-wrap: normal;
  min-width: 5vw;
}
.back{
  position: absolute;
  top: 1vmin;
  left: 1vmin;
}
</style>