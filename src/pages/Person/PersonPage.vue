<template>
  <div class="user-card">
    <img :src="user.avatarUrl" style="width: 50vw; border-radius: 50%;display: inline-block">
    <div class="info-container">
      <span class="username" style="font-size: 24px;">{{user.username}}</span>
      <span class="account" style="font-size: 16px;">账号:{{user.userAccount}}</span>
    </div>
  </div>
  <div class="cell">
  <van-cell title="个人信息" is-link to="info"/>
  <van-cell title="我的队伍" is-link />
  <van-cell title="设置" is-link to="setting"/>
  </div>
</template>

<script setup>
import {onMounted, ref} from "vue";
import {userStore} from "../../store/modules/userStore.js";

const store = userStore();
const user = ref({});
const username = localStorage.getItem('log_in_username');


onMounted(async ()=>{
  console.log('person',username);
  await store.fetchUser(username);
  user.value = store.userList;
})

</script>

<style scoped>
 .user-card {
   width:100vw;
   height: 50vw;
   background-color:#fff;
   display: flex;

 }

 .info-container{
   width: 50vw;
   display: flex;
   flex-direction: column;
   justify-content: center;
 }

</style>
