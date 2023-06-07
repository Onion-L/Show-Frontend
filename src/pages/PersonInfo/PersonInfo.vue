<template>
  <van-nav-bar
      title="个人信息"
      left-arrow
      @click-left="onClickLeft"
  />
  <van-cell title="头像" size="larger" is-link to="info/edit">
    <img style="height: 48px;" :src="user.avatarUrl">
  </van-cell>
<!--  <van-field name="avatarUrl" label="修改头像" :max-count="1" @change="onChange">
    <template #input>
      <van-uploader v-model="avatarUrl" />
    </template>
  </van-field>-->
  <van-cell title="昵称" size="larger" is-link to="info/edit" :value="user.username" @click="toEdit('昵称','username',user.username)"/>
  <van-cell title="账号" size="larger" :value="user.userAccount" />
  <van-cell title="性别" size="larger" is-link to="info/edit" :value="user.gender" @click="toEdit('性别','gender',user.gender)"/>
  <van-cell title="电话" size="larger" is-link to="info/edit" :value="user.phone" @click="toEdit('电话','phone',user.phone)"/>
  <van-cell title="邮箱" size="larger" is-link to="info/edit" :value="user.email" @click="toEdit('邮箱','email',user.email)"/>
  <van-cell title="编号" size="larger"  :value="user.planetCode" />
  <van-cell title="注册时间" size="larger"  :value="user.createTime" />
</template>

<script setup>
import {userStore} from "../../store/modules/userStore.js";
import {onMounted, ref} from "vue";
import {useRouter} from "vue-router";

const router = useRouter();

const store = userStore();
const user = ref({});
const avatarUrl = ref();

onMounted(async ()=>{
  // await store.fetchUser();
  // user.value = store.userList;
})


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

</script>

<style scoped>

</style>
