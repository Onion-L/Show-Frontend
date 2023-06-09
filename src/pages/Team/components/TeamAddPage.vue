<template>
  <van-nav-bar
      fixed
      left-arrow
      @click-left="onClickLeft"
  >
    <template #title>
      <span class="nav-title">Show</span>
    </template>
  </van-nav-bar>

  <div class="team-container">
  <van-form @submit="onSubmit">
    <van-cell-group inset>
      <van-field
          v-model="name"
          name="name"
          label="队伍名称"
          placeholder="队伍名称"
          :rules="[{ required: true, message: '请输入队伍名称' }]"
      />

      <van-field name="status" label="队伍状态">
        <template #input>
          <van-radio-group v-model="checked" direction="horizontal">
            <van-radio name="0">公开</van-radio>
            <van-radio name="1">私有</van-radio>
          </van-radio-group>
        </template>
      </van-field>

      <van-field name="maxNum" label="团队人数">
        <template #input>
          <van-stepper v-model="maxNum"  min="1" max="5"/>
        </template>
      </van-field>

      <van-field
          v-model="expireTime"
          is-link
          readonly
          name="expireTime"
          label="截止日期"
          placeholder="点击选择日期"
          @click="showCalendar = true"
          :rules="[{ required: true, message: '请选择截止日期' }]"
      />
      <van-calendar v-model:show="showCalendar" @confirm="onConfirm" />

      <van-field
          v-model="description"
          name="description"
          label="描述"
          placeholder="请描述以下你的队伍"
          rows="2"
          type="textarea"
          maxlength="50"
          colon
          :rules="[{ required: true, message: '请描述一下你的团队' }]"

      />
    </van-cell-group>

    <div style="margin: 16px;">
      <van-button round block type="primary" native-type="submit">
        提交
      </van-button>
    </div>
  </van-form>
  </div>
</template>

<script setup>

import {useRouter} from "vue-router";
import {ref} from "vue";
import axios from "axios";
import {showFailToast, showSuccessToast} from "vant";

const router = useRouter();

const name = ref('');
const description = ref('');
const maxNum = ref();
const checked = ref('0');

const expireTime = ref('');
const showCalendar = ref(false);
const onConfirm = (date) => {
  expireTime.value = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
  showCalendar.value = false;
};

const onClickLeft = () => {
  router.back();
}

const onSubmit = (values) => {
  values.username = localStorage.getItem('log_in_username');


  axios.post('/api/addTeam',values)
      .then((_) => {
        showSuccessToast('队伍创建成功');
        router.replace('/team');
      })
      .catch((_) => {
        showFailToast('队伍创建失败');
      })
}

</script>

<style scoped>
.team-container {
  margin-top: 66px;
}

@font-face{
  font-family: 'Pacifico';
  src:local('Pacifico'),url("src/assets/font/Pacifico-Regular.ttf") format('truetype');
}

.nav-title{
  font-family: 'Pacifico',sans-serif;
  color: #1989FA;
}
</style>
