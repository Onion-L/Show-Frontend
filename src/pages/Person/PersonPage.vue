<template>
  <div class="user-card">
    <img class="user-avatar" :src="avatarUrl" alt="avatar">
    <div class="info-container">
      <span class="username" style="font-size: 24px;">{{username}}</span>
      <span class="account" style="font-size: 16px;">账号:{{userAccount}}</span>
    </div>
  </div>
  <div class="cell">
  <van-cell title="个人信息" is-link to="info"/>
  <van-cell title="我的队伍" is-link />
  <van-cell title="设置" is-link to="setting"/>
  </div>
</template>

<script setup>
import {userStore} from "../../store/modules/userStore.js";
import {onMounted} from "vue";

const store = userStore();
const {avatarUrl,username,userAccount} = store.userData;

onMounted(()=>{
  console.log(avatarUrl.toString());
})
</script>

<style scoped>
 .user-card {
   width:100vw;
   height: 50vw;
   background-color:#fff;
   display: flex;
 }

 .user-avatar {
   width: 50vw;
   border-radius: 50%;
   display: inline-block
 }

 .info-container{
   width: 50vw;
   display: flex;
   flex-direction: column;
   justify-content: center;
   padding-left: 30px;
 }
</style>
