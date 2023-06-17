<template>
  <van-button type="primary" text="显示遮罩层" @click="show = true" />
  <van-overlay :show="show" @click="show = false" />
</template>

<script setup>
import {ref} from "vue";

const show = ref(false);
</script>

<style scoped>

</style>