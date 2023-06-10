<template>
  <template v-if="teamList.length > 0">
    <van-card
        v-for="(team,index) in teamList"
        :key="index"
        :desc="team.description"
        :title="team.name"
        :thumb="team.avatarUrl"
        @click="handleOnClick(index)"
    >
      <template #footer>
        <van-button size="mini">联系我们</van-button>
      </template>
    </van-card>
  </template>
  <van-empty v-else image="search" description="暂无数据" />
  <van-button class="add-btn" icon="plus" type="primary" size="normal" @click="addTeam"/>
</template>

<script setup>
import {onMounted, ref} from "vue";
import {teamStore} from "../../store/modules/teamStore.js";
import {useRouter} from "vue-router";
import axios from "axios";

const teamList = ref([]);
const store = teamStore();
const router = useRouter();

onMounted(()=>{
/*  await store.fetchTeamList();
  teamList.value = store.teamList;*/
  axios.get('/api/team')
      .then(response => {
        console.log(response.data);
        store.teamList = response.data;
        teamList.value = response.data;
      })
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

const addTeam = () => {
  router.push('/addTeam');
}


</script>

<style scoped>

.van-card{
  background-color: #fff;  
}

.add-btn {
  position:fixed;
  bottom: 15vh;
  right:5vw;
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
</style>
