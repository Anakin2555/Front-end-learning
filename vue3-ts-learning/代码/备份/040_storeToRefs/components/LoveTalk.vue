<template>
  <div class="talk">
    <button @click="getLoveTalk">获取一句土味情话</button>
    <ul>
      <li v-for="talk in talkList" :key="talk.id">{{talk.title}}</li>
    </ul>
  </div>
</template>

<script setup lang="ts" name="LoveTalk">
  import {useTalkStore} from '@/store/loveTalk'
  import { storeToRefs } from "pinia";

  const talkStore = useTalkStore()
  const {talkList} = storeToRefs(talkStore)
  
  // 方法
  function getLoveTalk(){
    talkStore.getATalk()
  }
</script>regionList: [
        '不限地区',
        '华北地区',
        '华东地区',
        '华中地区',
        '华南地区',
        '西北地区',
        '西南地区',
        '东北地区'
      ]

<style scoped>
  .talk {
    background-color: orange;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 0 10px;
  }
</style>