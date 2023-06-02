<template>
  <van-radio-group v-model="checked">
    <van-cell-group inset>
      <van-cell title="男" clickable @click="changeValue('男')">
        <template #right-icon>
          <van-radio name="男" />
        </template>
      </van-cell>
      <van-cell title="女" clickable @click="changeValue('女')">
        <template #right-icon>
          <van-radio name="女" />
        </template>
      </van-cell>
    </van-cell-group>
  </van-radio-group>
</template>

<script setup>
import {ref} from "vue";
import {useRoute} from "vue-router";

const route = useRoute();
const editUser = ref({
  key:route.query.key,
  value:route.query.value,
  currentValue:route.query.currentValue
});

const checked = ref(editUser.value.currentValue);

const changeValue = (gender) => {
  checked.value = gender;
}

</script>

<style scoped>

</style>
