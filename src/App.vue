<template>
  <div id="app">
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>


import {mapActions} from "vuex";

export default {
name: 'App',
  methods: {
    ...mapActions({
      init: 'dataManage/init',
    }),
  },
  created() {
    this.init()
  }
}
</script>
<style lang="scss">
body {
  margin: 0;

}

.mainColor {
  background-color: #E2E3FB ;

}
.secondColor {
  background-color: #FDE0B0 !important;
}

.primaryColor{
  background-color: #434691 !important;
  color: white;
}
</style>
