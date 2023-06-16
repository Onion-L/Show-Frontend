<template>
  <van-nav-bar title="标题" left-arrow @click-left="onClickLeft">
    <template #right>
      <van-button size="small" type="primary" @click="saveInfo">完成</van-button>
    </template>
  </van-nav-bar>
  <template v-if="editUser.value !== 'gender'">
  <van-cell-group inset>
    <van-field v-model="newInfo" :label="editUser.key" :placeholder="`请输入新的${editUser.key}`" />
  </van-cell-group>
  </template>
  <template v-else>
    <edit-gender-page/>
  </template>
</template>

<script setup>

import {onMounted, ref} from "vue";
import {useRoute} from "vue-router";
import EditGenderPage from "./components/EditGenderPage.vue";
import router from "../../route/router.js";
import {userStore} from "../../store/modules/userStore.js";
import axios from "axios";

const newInfo = ref();
const route = useRoute();
const userStorage = userStore();

const editUser = ref({
  key:route.query.key,
  value:route.query.value,
  currentValue:route.query.currentValue
});

onMounted(()=>{
  console.log(route.query.currentValue)
})
const onClickLeft = ()=>{
  router.back();
};

const saveInfo = () => {
  console.log(newInfo.value);
  console.log(route.query.value);
  const {value} = route.query;
  axios.post('/api/updateUser',{
    [value.key] : newInfo.value
  })
}
</script>

<style scoped>

</style>
