<template>
  <van-nav-bar
     title="登录"
  />
  <h3 class="title">Welcome to your show~</h3>

<!--  <img class="avatar" :src="avatarUrl"/>-->
  <van-image :src="avatarUrl">
    <template v-slot:default>加载失败</template>
  </van-image>
  <van-form @submit="onSubmit" style="margin-top: 50px;">
    <van-cell-group inset>
      <van-field
          v-model="username"
          name="username"
          label="用户名"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
          v-model="password"
          type="password"
          name="password"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
      />
    </van-cell-group>
    <div class="btn-container">
      <van-button type="primary" native-type="submit">
        登录
      </van-button>
      <van-button plain @click="onRegister" type="primary" native-type="button">
        注册
      </van-button>
    </div>
  </van-form>
</template>

<script setup>
import {onMounted, ref} from "vue";
import {useRouter} from "vue-router";
import axios from "axios";
import {showFailToast, showSuccessToast} from "vant";

const username = ref('');
const password = ref('');
const avatarUrl = ref('');
const router = useRouter();

onMounted(() => {
  axios.get('/api/user')
      .then(response => {
        console.log(response.data)
      })
      .catch((_) => {
        console.error('头像加载失败');
      })

})

const onSubmit = (values) => {
  console.log(typeof values)
  console.log('submit', values);

  axios.post('/api/login',values)
      .then((response)=>{
        console.log('数据成功传输~~~',typeof values)
        console.log(response.data);
        localStorage.setItem('login_token',response.data);
        router.replace('/home').then(() => {
              showSuccessToast('登录成功');
            })
      })
      .catch(e => {
        // console.log('ERROR',e.message)
        showFailToast('用户名/密码错误');
      })
};

const onRegister = () => {
  router.push({
    path:'/register'
  })
}
</script>

<style scoped>
.login-container{
  display: flex;
  flex-direction: column;
  justify-content: center;
}

@font-face{
  font-family: 'Pacifico';
  src:local('Pacifico'),url("src/assets/font/Pacifico-Regular.ttf") format('truetype');
}

.title{
  font-family: 'Pacifico';
  color: #1989FA;
  text-align: center;
}

.van-button{
  width: 40vw;
  font-size: 16px;
}

.btn-container {
  display: flex;
  justify-content: space-around;
  margin-top: 30px;
}
</style>
