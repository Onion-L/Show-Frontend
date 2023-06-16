<template>
  <van-nav-bar
      title="个人信息"
      left-arrow
      @click-left="onClickLeft"
  />
  <form enctype="multipart/form-data">
    <van-cell title="头像" size="larger">
      <img style="height: 48px;" alt="头像" :src="user.avatarUrl">
      <input class="avatar-upload"
             type="file"
             accept="image/*"
             name="picture"
             @change="uploadAvatar"
      />
    </van-cell>
  </form>

  <van-cell title="昵称" size="larger" is-link to="info/edit" :value="user.username" @click="toEdit('昵称','username',user.username)"/>
  <van-cell title="账号" size="larger" :value="user.userAccount" />
  <van-cell title="性别" size="larger" is-link to="info/edit" :value="user.gender" @click="toEdit('性别','gender',user.gender)"/>
  <van-cell title="电话" size="larger" is-link to="info/edit" :value="user.phone" @click="toEdit('电话','phone',user.phone)"/>
  <van-cell title="邮箱" size="larger" is-link to="info/edit" :value="user.email" @click="toEdit('邮箱','email',user.email)"/>
  <van-cell title="编号" size="larger"  :value="user.id" />
  <van-cell title="注册时间" size="larger"  :value="user.createdAt" />
</template>

<script setup>

import {userStore} from "../../store/modules/userStore.js";
import {onBeforeUnmount, onMounted, ref} from "vue";
import {useRouter} from "vue-router";
import axios from "axios";

const router = useRouter();
const userStorage = userStore();
const user = userStorage.userData;

//修改头像
const uploadAvatar = (event) => {
  let fileReader = new FileReader();
  const file = event.target.files[0];
  fileReader.readAsDataURL(file);
  fileReader.onload = (event => {
    user.avatarUrl = event.target.result;
  })
}

const onClickLeft = () => {
  console.log(userStorage.userData);

  router.back();
}

const toEdit = (key,value,currentValue) => {
  router.push ({
    path:'info/edit',
    query:{
      key,
      value,
      currentValue
    }
  })
}


</script>

<style scoped>
.avatar-upload {
  opacity: 0;
  width: 100%;
  height: 100%;
  position:absolute;
  top:0;
  left:0;
}
</style>
