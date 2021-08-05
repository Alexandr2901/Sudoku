<template>
  <div class="LeaderBoard">
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
    <div v-if="board" class="board">
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
  color: #434691;
  background-color: #F3F1E9;
  width: 100vw;
  min-height: 93vh;
  display: flex;
  justify-content: center;
  padding-top: 7vh;
}
.board{
  /*padding: 5vmin;*/
  /*display: grid;*/
  /*flex-direction: column;*/
  /*justify-content: center;*/
  /*align-items: center;*/
}
.board:first-child{
  width: 100%;
}
.user{
  background-color: #F5F5F5;
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  /*justify-content: space-between;*/
  /*max-width: 71vw;*/
  white-space: nowrap;
  margin-bottom: 5px;
}
.user>div{
  padding: 1vmin;
  overflow: hidden;
  word-wrap: normal;
  min-width: 5vw;
}
.user>div:nth-child(odd) {
  text-align: center;
}
.user>div:nth-child(even) {
  text-align: left;
  width: 50vmin;
  /*width: 100%;*/
}
.user>div:nth-child(1) {
  margin: auto;
  width: 15vmin;
}
.user>div:nth-child(3) {
  margin: auto;
  width: 25vmin;
}
.back{
  position: absolute;
  top: 1vmin;
  left: 1vmin;
}
</style>