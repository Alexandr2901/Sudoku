<template>
  <div id="app">
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>


import {mapActions} from "vuex";
import bridge from '@vkontakte/vk-bridge';

export default {
name: 'App',
  methods: {
    ...mapActions({
      init: 'dataManage/init',
    }),
    // bridge.send('VKWebAppInit');

  },
  created() {
    bridge.subscribe(e => console.log(e));
    // bridge.send("VKWebAppStorageSet", {"key": "example", "value": "example_value"}).then(data=>{
    //   console.log(data)});
    // bridge.send("VKWebAppStorageGetKeys", {"count": 20, "offset": 0}).then(data=>{
    //   console.log(data)});
    // bridge.send("VKWebAppStorageGet", {"keys": ["example"]}).then(data=>{
    //   console.log(data)});
    bridge.send("VKWebAppGetUserInfo").then(data=>{
      console.log(data)});
    this.init()
    // bridge
    //     .send('VKWebAppGetEmail')
    //     .then(data => {
    //       // Handling received data
    //       // console.log(data.email);
    //       console.log(data)
    //     })
    //     .catch(error => {
    //       console.log(error)
    //       // Handling an error
    //     });

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
