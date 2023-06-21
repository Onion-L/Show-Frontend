<template>
  <van-nav-bar
      title="我的队伍"
      left-arrow
      @click-left="onClickLeft"
  />
  <van-card
      v-for="(team,index) in myTeam"
      :key="index"
      :desc="team.description"
      :title="team.name"
      thumb="https://c-ssl.duitang.com/uploads/item/201810/18/20181018162952_qhgsh.jpeg"
      style=" background-color: #fff; "
  >
    <template #footer>
      <van-button class="edit-btn" size="normal" type="primary" @click="toEdit">编辑</van-button>
    </template>
  </van-card>
</template>

<script setup>
import {useRouter} from "vue-router";
import {userStore} from "../../store/modules/userStore.js";
import {teamStore} from "../../store/modules/teamStore.js";

const router = useRouter();

const userStorage = userStore();
const {id} = userStorage.userData;
const teamStorage = teamStore();
const teamList = teamStorage.teamList;

const myTeam = teamList.filter((team)=> team.userId === id);

const toEdit = () => {
  router.push({
    path:'/editMyTeam'
  })
}
const onClickLeft = ()=>{
  router.back();
}

</script>

<style scoped>
.edit-btn {
  padding: 0 10px;
  font-size: 12px;
  height:30px;
}
</style>
