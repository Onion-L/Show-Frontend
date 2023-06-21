<template>
  <van-nav-bar
      title="个人信息"
      left-arrow
      @click-left="onClickLeft"
  />
  <form enctype="multipart/form-data">
    <van-cell title="头像" size="larger">
      <img style="height: 48px;" alt="头像" :src="avatarUrl">
      <input class="avatar-upload"
             type="file"
             accept="image/*"
             name="picture"
      />
    </van-cell>
  </form>

  <van-cell title="用户名" size="larger" is-link to="info/edit" :value="username" @click="toEdit('用户名','username',username)"/>
  <van-cell title="账号" size="larger" :value="userAccount" />
  <van-cell title="性别" size="larger" is-link to="gender" :value="genderList[gender]" @click="toEditGender('性别','gender',gender)"/>
  <van-cell title="电话" size="larger" is-link to="info/edit" :value="phone" @click="toEdit('电话','phone',phone)"/>
  <van-cell title="邮箱" size="larger" is-link to="info/edit" :value="email" @click="toEdit('邮箱','email',email)"/>
  <van-cell title="编号" size="larger"  :value="id" />
  <van-cell title="注册时间" size="larger"  :value="createdAt" />
</template>

<script setup>

import {userStore} from "../../store/modules/userStore.js";
import {useRouter} from "vue-router";

const router = useRouter();
const userStorage = userStore();
const {avatarUrl,username,userAccount,phone,email,id,createdAt,gender} = userStorage.userData;
const genderList = ['未设置','男','女','保密'];

/**
 * 修改头像 todo
 */
/*const uploadAvatar = (event) => {
  // let formData = new FormData();
  let fileReader = new FileReader();
  const file = event.target.files[0];
  console.log('file',file);
  fileReader.onload = (event => {
    console.log('!!!',event.target.result)
    user.avatarUrl = event.target.result;
    // axios.post('/api/updateUser',event.target.result)
  })
 formData.append('avatar',file,);
  console.log(formData.get('avatar'));
  user.avatarUrl = formData.get('avatar');
}*/

const onClickLeft = () => {
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

const toEditGender = (key,value,currentValue) => {
  router.push({
    path:'/gender',
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
