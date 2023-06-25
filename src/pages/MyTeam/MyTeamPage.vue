<template>
  <van-nav-bar
      title="我的队伍"
      left-arrow
      @click-left="onClickLeft"
  />
  <van-pull-refresh v-model="loading" @refresh="onRefresh">
    <div class="card-container" style="height: calc(100vh - 50px);">
  <van-card
      v-for="(team,index) in myTeam"
      :key="index"
      :desc="team.description"
      :title="team.name"
      thumb="https://c-ssl.duitang.com/uploads/item/201810/18/20181018162952_qhgsh.jpeg"
      style=" background-color: #fff; "
  >
    <template #footer>
      <van-button class="edit-btn" size="normal" type="danger" @click="handleDelete(team,index)">删除</van-button>
    </template>
  </van-card>
    </div>
  </van-pull-refresh>
</template>

<script setup>
import {useRouter} from "vue-router";
import {userStore} from "../../store/modules/userStore.js";
import {teamStore} from "../../store/modules/teamStore.js";
import {onMounted, ref} from "vue";
import {showSuccessToast} from "vant";

const router = useRouter();

const count = ref(0);
const loading = ref(false);
const onRefresh = () => {
  setTimeout(() => {
    showSuccessToast('刷新成功');
    loading.value = false;
    count.value++;
  }, 1000);
};


const userStorage = userStore();
const {id} = userStorage.userData;
const teamStorage = teamStore();
const teamList = teamStorage.teamList;

const myTeam = teamList.filter((team)=> team.userId === id);

onMounted(()=>{
  console.log('myTeam',myTeam);
  console.log('teamList',teamList);
})

const handleDelete = (team,index) => {
  const teamID = teamList.indexOf(team);
  console.log(index);
  myTeam.splice(index,1);
  teamList.splice(teamID,1);
  console.log('myTeam',myTeam);
  console.log('teamList',teamList);
  location.reload();
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
