<template>
  <van-nav-bar :title="`更改${editUser.key}`" left-arrow @click-left="onClickLeft">
    <template #right>
      <van-button size="small" type="primary" @click="saveInfo">完成</van-button>
    </template>
  </van-nav-bar>
  <van-cell-group inset>
    <van-field v-model="newInfo" :label="editUser.key" :placeholder="`请输入新的${editUser.key}`" />
  </van-cell-group>
</template>

<script setup>

import {onMounted, ref} from "vue";
import {useRoute} from "vue-router";
import router from "../../route/router.js";
import {userStore} from "../../store/modules/userStore.js";
import axios from "axios";
import {showFailToast} from "vant";

const newInfo = ref();
const route = useRoute();
const userStorage = userStore();

const editUser = {
  key:route.query.key,
  value:route.query.value,
  currentValue:route.query.currentValue
};


onMounted(()=>{
  console.log('type',typeof route.query.currentValue)
})
const onClickLeft = ()=>{
  router.back();
};

const saveInfo = () => {
  console.log('new',newInfo.value);
  console.log('old',editUser.currentValue)
  const {value} = route.query;
  if(newInfo.value === undefined) {
    showFailToast(`请输入${editUser.key}`)
  }else {
    axios.post('/api/updateUser',{
      key:editUser.value,
      newValue:newInfo.value,
      oldValue:editUser.currentValue
    }).then(_=>{
      console.log('success');
    }).catch((err) => {
      console.error(err.message);
      // showFailToast(`${editUser.key}已存在`)
    })
    // userStorage[value] = newInfo.value;
  }

}
</script>

<style scoped>
.van-cell-group--inset {
  margin: 10px;
  border-radius: 0;
  border-bottom: 1px #dcdcdc solid;
}

.van-cell {
  background-color: #f7f8fa;
}
</style>
