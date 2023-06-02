<template>
  <van-nav-bar
      title="标题"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
  />
  <van-cell title="单元格" is-link />
  <van-cell title="单元格" is-link />
  <van-cell title="单元格" is-link />
  <van-cell title="单元格" is-link />
  <van-cell title="单元格" is-link />
  <van-cell title="单元格" is-link />
  <van-cell title="单元格" is-link />

  <van-button class="logout-btn" type="danger" block @click="handleLogout">退出登录</van-button>

</template>

<script setup>
  import {useRouter} from "vue-router";
  import {showSuccessToast, showToast, Toast} from 'vant';

  const router = useRouter();
  const onClickLeft = ()=>{
    router.back();
  }

  const handleLogout = () => {
    showSuccessToast('退出登录成功');
  }

</script>

<style scoped>

.logout-btn {
  width: 85vw;
  margin:50px auto;
}
</style>
