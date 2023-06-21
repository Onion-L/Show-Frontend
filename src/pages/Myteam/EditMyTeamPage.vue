<template>
  <van-nav-bar
      title="我的队伍"
      left-arrow
      @click-left="onClickLeft"
  />
  <div class="team-container" style="margin-top: 10px;">
    <van-form @submit="onSubmit">
      <van-cell-group inset>
        <van-field
            v-model="name"
            name="name"
            label="队伍名称"
            placeholder="队伍名称"
            :rules="[{ required: true, message: '请输入队伍名称' }]"
        />

        <van-field name="status" label="队伍状态">
          <template #input>
            <van-radio-group v-model="checked" direction="horizontal">
              <van-radio name="0">公开</van-radio>
              <van-radio name="1">私有</van-radio>
            </van-radio-group>
          </template>
        </van-field>

        <van-field name="maxNum" label="团队人数">
          <template #input>
            <van-stepper v-model="maxNum"  min="1" max="5"/>
          </template>
        </van-field>

        <van-field
            v-model="expireTime"
            is-link
            readonly
            name="expireTime"
            label="截止日期"
            placeholder="点击选择日期"
            @click="showCalendar = true"
            :rules="[{ required: true, message: '请选择截止日期' }]"
        />
        <van-calendar v-model:show="showCalendar" @confirm="onConfirm" />

        <van-field
            v-model="description"
            name="description"
            label="描述"
            placeholder="请描述以下你的队伍"
            rows="2"
            type="textarea"
            maxlength="50"
            colon
            :rules="[{ required: true, message: '请描述一下你的团队' }]"

        />
      </van-cell-group>

      <div style="margin: 16px;">
        <van-button round block type="primary" native-type="submit">
          提交
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script setup>
import {useRouter} from "vue-router";
import {ref} from "vue";
import {teamStore} from "../../store/modules/teamStore.js";

const router = useRouter();
const teamStorage = teamStore();


const onClickLeft = ()=>{
  router.back();
}

const onSubmit = (values) => {
  console.log('submit', values);
};
</script>

<style scoped>

</style>
