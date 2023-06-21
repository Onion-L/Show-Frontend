<template>
  <div class="team-card">
<!--    <img alt="avatar" :src="team" style="width: 85%; margin-top: 10px;">-->
    <div>
    <h3 class="username">{{team[index].name}}</h3>
    <h5 class="email">{{ team[index].email }}</h5>
    </div>
  </div>
</template>

<script setup="props">
import {onMounted} from "vue";
import {teamStore} from "../store/modules/teamStore.js";

const props = defineProps(['index'])
const teamStorage = teamStore();
const team = teamStorage.teamList;

onMounted(() => {
  console.log(props.index);
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
