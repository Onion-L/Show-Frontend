<template>
  <van-card
      v-for="(team,index) in teamList"
      :key="index"
      :desc="team.title"
      :title="team.username"
      :thumb="team.avatarUrl"
      @click="handleOnClick(index)"
  >
    <template #footer>
      <van-button size="mini">联系我们</van-button>
    </template>
  </van-card>
</template>

<script setup>
import {onMounted, ref} from "vue";
import axios from 'axios';
import {teamStore} from "../../store/modules/teamStore.js";
import {useRouter} from "vue-router";

const teamList = ref([]);
const store = teamStore();
const router = useRouter();

onMounted(async ()=>{
  await store.fetchTeamList();
  teamList.value = store.teamList;
})

const handleOnClick = (index)=>{
  console.log(index);
  router.push({
    path:'/teamInfo',
    query:{
      index:index
    }
  })
}

</script>

<style scoped>
*{
  background-color: #fff;
}
</style>
