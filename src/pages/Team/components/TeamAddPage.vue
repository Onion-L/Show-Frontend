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
</template>

<script setup>

import {useRouter} from "vue-router";

const router = useRouter();
const onClickLeft = () => {
  router.back();
}

</script>

<style scoped>
@font-face{
  font-family: 'Pacifico';
  src:local('Pacifico'),url("src/assets/font/Pacifico-Regular.ttf") format('truetype');
}

.nav-title{
  font-family: 'Pacifico',sans-serif;
  color: #1989FA;
}
</style>
