<template>
  <van-nav-bar
      left-arrow
      fixed
      @clickLeft="onClickLeft"
  >
    <template #title>
      <span class="nav-title">Show</span>
    </template>
  </van-nav-bar>

  <team-card :index="index" style="margin-top: 54px"/>
</template>

<script setup>

import {teamStore} from "../../store/modules/teamStore.js";
import {useRoute, useRouter} from "vue-router";
import {onMounted, ref} from "vue";
import TeamCard from "../../components/TeamCard.vue";

const store = teamStore();
const team = ref([]);
const route = useRoute();
const router = useRouter();

const {index} = route.query;

onMounted(async ()=>{
  console.log(store.teamList);
  team.value = store.teamList;
  console.log('team1',store.teamList[0].name);
})


  const onClickLeft = () => {
    router.back();
  }

</script>

<style scoped>
@font-face{
  font-family: 'Pacifico';
  src:local('Pacifico'),url("src/assets/font/Pacifico-Regular.ttf") format('truetype');
}

.nav-title{
  font-family: 'Pacifico',serif;
  color: #1989FA;
}
</style>
