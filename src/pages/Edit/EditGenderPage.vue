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
    </van-cell-group>
  </van-radio-group>
</template>

<script setup>
import {ref} from "vue";
import {useRoute, useRouter} from "vue-router";

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

}
</script>

<style scoped>

</style>
