<template>
  <van-pull-refresh v-model="loading" @refresh="onRefresh">
    <p>刷新次数: {{ count }}</p>
  </van-pull-refresh>
</template>

<script setup>
import {showSuccessToast} from "vant";
import {ref} from "vue";

const count = ref(0);
const loading = ref(false);
const onRefresh = () => {
  setTimeout(() => {
    showSuccessToast('刷新成功');
    loading.value = false;
    count.value++;
  }, 1000);
};
</script>

<style scoped>

</style>
