<template>
  <van-nav-bar
      left-arrow title="搜索"
      @click-left="onClickLeft"
  />
  <form action="/public">
    <van-search
        v-model="value"
        show-action
        placeholder="请输入搜索关键词"
        @search="onSearch"
    />
  </form>

  <van-divider>已选标签</van-divider>
  <div v-if="activeId.length === 0">请选择标签</div>
  <van-row v-else gutter="15">
    <van-col v-for="tag in activeId" >
      <van-tag round closeable plain size="large" type="primary" @close="close(tag)">{{ tag }}</van-tag>
    </van-col>
  </van-row>

  <van-divider>选择标签</van-divider>
  <van-tree-select
      v-model:active-id="activeId"
      v-model:main-active-index="activeIndex"
      :items="tagList"
      height="100vh"
  />
</template>

<script setup>
import {onMounted, ref} from "vue";
import axios from "axios";
import {useRouter} from "vue-router";

  const value = ref('');
  const router = useRouter();
  const activeId = ref([]);
  const activeIndex = ref(0);
  const onSearch = (val) => {
    tagList.forEach(parentTag=>{
      parentTag.children = parentTag.children.find(tag=>{
        return tag.id === val;
      })
    })
  }

  const onClickLeft = ()=>{
    router.back();
  }

  const close = (tag) => {
    console.log(activeId.value);
    activeId.value = activeId.value.filter(item =>{
      return item !== tag
    })
  }

// const tagList = ref([]);
//
//   onMounted(()=>{
//     axios.get('/tagList')
//         .then(response=>{
//           console.log(response.data)
//           tagList.value = response.data;
//         })
//   })


const tagList = [
  {
    text: '后端开发',
    children: [
      { text: 'Java', id: 'Java' },
      { text: 'Python', id: 'Python' },
      { text: 'Go', id: 'Go' },
    ],
  },
  {
    text: '前端开发',
    children: [
      { text: 'JavaScript', id: 'JavaScript' },
      { text: 'Vue', id: 'Vue' },
      { text: 'React', id: 'React' },
    ],
  },
  { text: '人工智能',
  children: []},
];
</script>
