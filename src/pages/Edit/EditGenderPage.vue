<template>
  <van-nav-bar :title="`设置${editUser.key}`" left-arrow @click-left="onClickLeft">
    <template #right>
      <van-button size="small" type="primary" @click="saveInfo">完成</van-button>
    </template>
  </van-nav-bar>
  <van-radio-group v-model="checked">
    <van-cell-group inset>
      <van-cell title="男" clickable @click="changeValue('1')">
        <template #right-icon>
          <van-radio name="1" />
        </template>
      </van-cell>
      <van-cell title="女" clickable @click="changeValue('2')">
        <template #right-icon>
          <van-radio name="2" />
        </template>
      </van-cell>
      <van-cell title="保密" clickable @click="changeValue('3')">
        <template #right-icon>
          <van-radio name="3" />
        </template>
      </van-cell>
    </van-cell-group>
  </van-radio-group>
</template>

<script setup>
import {ref} from "vue";
import {useRoute, useRouter} from "vue-router";
import {showFailToast} from "vant";
import axios from "axios";

const router = useRouter();
const route = useRoute();

const editUser = {
  key:route.query.key,
  value:route.query.value,
  currentValue:route.query.currentValue
};

const checked = ref(editUser.currentValue);

const onClickLeft = () => {
  router.back();
}
const changeValue = (gender) => {
  checked.value = gender;
}

const saveInfo = () => {
  console.log('new', checked.value);
  console.log('old', editUser.currentValue);

  if ( Number(checked.value) === 0) {
    showFailToast(`请选择${editUser.key}`)
  } else {
    axios.post('/api/updateUser', {
      key: editUser.value,
      newValue: checked.value,
      oldValue: editUser.currentValue
    }).then(_ => {
      console.log('success');
    })
  }
}
</script>

<style scoped>

</style>
