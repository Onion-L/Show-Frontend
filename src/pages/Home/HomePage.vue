<template>
  <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white" lazy-render>
    <van-swipe-item>
      <img alt="notification" src="https://pic3.zhimg.com/v2-c6ae9c3aff36b9b221258f6a90577902_r.jpg">
    </van-swipe-item>
    <van-swipe-item>
      <img alt="notification" src="https://pic3.zhimg.com/v2-c6ae9c3aff36b9b221258f6a90577902_r.jpg">
    </van-swipe-item>
    <van-swipe-item>
      <img alt="notification" src="https://pic3.zhimg.com/v2-c6ae9c3aff36b9b221258f6a90577902_r.jpg">
    </van-swipe-item>
    <van-swipe-item>
      <img alt="notification" src="https://pic3.zhimg.com/v2-c6ae9c3aff36b9b221258f6a90577902_r.jpg">
    </van-swipe-item>
  </van-swipe>
  <van-tabs v-model:active="active">
    <van-tab title="标签 1">内容 1</van-tab>
    <van-tab title="标签 2">内容 2</van-tab>
    <van-tab title="标签 3">内容 3</van-tab>
    <van-tab title="标签 4">内容 4</van-tab>
  </van-tabs>
</template>

<script setup>
import {onMounted, ref} from "vue";
import {useRouter} from "vue-router";
import {teamStore} from "../../store/modules/teamStore.js";


const active = ref(0);
const router = useRouter();
const sessionID = document.cookie.split('=')[1];//获取cookie
const team = teamStore();


onMounted(()=>{
  if(sessionID) {
    localStorage.setItem('_show_user_session_id',sessionID);
  }
})

</script>

<style scoped>
img {
  width:100vw;
}
</style>
