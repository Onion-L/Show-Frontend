<template>
  <template v-if="teamList.length > 0">
    <van-card
        v-for="(team,index) in teamList"
        :key="index"
        :desc="team.description"
        :title="team.name"
        thumb="https://c-ssl.duitang.com/uploads/item/201810/18/20181018162952_qhgsh.jpeg"
        style=" background-color: #fff; "
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

const teamStorage = teamStore();
const {teamList} = teamStorage;
const router = useRouter();

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
.add-btn {
  position:fixed;
  bottom: 15vh;
  right:5vw;
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
</style>
