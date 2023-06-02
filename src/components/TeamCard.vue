<template>
  <div class="team-card">
    <img src="../assets/avartar.png" style="width: 85%; margin-top: 10px;">
    <div>
    <h3 class="username">{{team[index].username}}</h3>
    <h5 class="email">{{ team[index].email }}</h5>
    </div>
  </div>
</template>

<script setup>

import {teamStore} from "../store/modules/teamStore.js";
import {useRoute, useRouter} from "vue-router";
import {onMounted, ref} from "vue";

const store = teamStore();
const team = ref([]);
const route = useRoute();
const router = useRouter();
const index = parseInt(route.query.index.toString());

onMounted(async ()=>{
  await store.fetchTeamList();
  team.value = store.teamList;
  console.log('team1',team.value[index]);
})

</script>

<style scoped>
.team-card {
  display: flex;
  flex-direction:column;
  flex-wrap:wrap;
  justify-content: center;
  align-content: center;
  width: 95vw;
  background-color: #fff;
  box-shadow: 8px 3px 3px grey;
  border-radius: 10px;
  margin:0 auto;
}
</style>
