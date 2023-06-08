<template>
    <div>
      <van-nav-bar
          @click-right="onClickRight"
          fixed
      >
        <template #title>
          <span class="nav-title">Show</span>
        </template>

        <template #right>
          <van-icon name="search" size="24" />
        </template>
      </van-nav-bar>
      <div class="container">
        <router-view/>
      </div>
      <van-tabbar v-model="active" route>
        <van-tabbar-item name="home" icon="home-o" to="/home">主页</van-tabbar-item>
        <van-tabbar-item name="team" icon="search" to="/team">组队</van-tabbar-item>
        <van-tabbar-item name="person" icon="friends-o" to="/person">个人</van-tabbar-item>
      </van-tabbar>
    </div>
</template>
<script setup>
import { ref } from 'vue';
import { useRouter} from 'vue-router';

  const active = ref('home');
  const router = useRouter();

  const onClickRight = () =>{
    router.push('/search');
  }

</script>
<style scoped>
.container {
    margin: 50px 0;
  }

@font-face{
  font-family: 'Pacifico';
  src:local('Pacifico'),url("src/assets/font/Pacifico-Regular.ttf") format('truetype');
}

.nav-title{
  font-family: 'Pacifico',sans-serif;
  color: #1989FA;
}

</style>
