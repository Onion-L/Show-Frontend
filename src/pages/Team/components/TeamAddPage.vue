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
          v-model="username"
          name="用户名"
          label="用户名"
          placeholder="用户名"
      />
      <van-field
          v-model="password"
          type="password"
          name="密码"
          label="密码"
          placeholder="密码"
      />
    </van-cell-group>

    <div style="margin-top: 160px;">
      <van-button round block type="primary" native-type="submit">
        提交
      </van-button>
    </div>
  </van-form>
  </div>
</template>

<script setup>

import {useRouter} from "vue-router";

const router = useRouter();
const onClickLeft = () => {
  router.back();
}

</script>

<style scoped>
.team-container {
  margin-top: 50px;
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
