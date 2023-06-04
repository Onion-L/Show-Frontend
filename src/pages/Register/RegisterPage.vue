<template>
  <van-nav-bar
      title="注册"
      @click-left="onClickLeft"
  >
    <template #left>
      <van-icon name="cross" size="18"/>
    </template>
  </van-nav-bar>
  <van-form @submit="onSubmit">
    <van-cell-group inset>
      <van-field
          v-model="username"
          name="username"
          label="用户名"
          placeholder="6-20位（字母，数字，下划线）"
          :rules="[{ pattern: namePattern, message: '用户名格式不符合要求' }]"
      />
      <van-field
          v-model="password"
          type="password"
          name="password"
          label="密码"
          placeholder="8-20位，至少包含两种及以上字符"
          :rules="[{ pattern: pwdPattern, message: '密码格式不符合要求' }]"
      />
      <van-field
          v-model="checkPassword"
          type="password"
          label="确认密码"
          placeholder="请再次输入密码"
          :rules="[{ validator, message: '两次密码不一致，请确认后重新输入' }]"
      />
      <van-field
          v-model="result"
          is-link
          readonly
          name="area"
          label="地区选择"
          placeholder="点击选择省市区"
          @click="showArea = true"
      />
      <van-popup v-model:show="showArea" position="bottom">
        <van-area
            :area-list="areaList"
            @confirm="onConfirm"
            @cancel="showArea = false"
        />
      </van-popup>
    </van-cell-group>
    <div style="margin: 16px;">
      <van-button block plain type="primary" native-type="submit">
        注册
      </van-button>
    </div>
  </van-form>
</template>

<script setup>
import { useRouter} from "vue-router";
import {ref} from "vue";
import { areaList } from '@vant/area-data';
import axios from "axios";
import {showSuccessToast} from "vant";

const router = useRouter();

const username = ref('');
const password = ref('');
const checkPassword = ref('');

const result = ref('');
const showArea = ref(false);
const namePattern =/^[a-zA-Z0-9_]{6,20}$/;
const pwdPattern = /^(?![0-9]+$)(?![a-z]+$)(?![A-Z]+$)(?!_+$)[0-9_A-Za-z]{7,19}$/;

const validator = (val)=>{
  return val === password.value;
}
const onClickLeft = () =>{
  router.back();
}

const onConfirm = ({ selectedOptions }) => {
  showArea.value = false;
  result.value = selectedOptions.map((item) => item.text).join('/');
};

const onSubmit = (values) => {
  axios.post('/api/register',values)
      .then(req => {
        console.log(req)
        router.replace('/login');
      })
      .catch(error => {
        console.error('register',error.message);
      })
};

</script>

<style scoped>

</style>
