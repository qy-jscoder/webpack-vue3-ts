<!--
 * @Author: 邱扬
 * @LastEditors: 邱扬
 * @description: page description
 * @Date: 2022-01-28 13:28:26
 * @LastEditTime: 2022-03-03 13:59:35
-->
<template>
  <div>
    <h1>{{ defaultProfile.name }}</h1>
    <router-link to="/child">跳转</router-link>
    <h1>vuex的state中的count：{{ state.count }}</h1>
    <el-button @click="state.count++">加一</el-button>
    <el-input
      v-model="input"
      placeholder="Please input"
      @blur="blur"
      style="margin-top: 10px"
    />
    <div class="container">
      <el-button type="text">Text Button</el-button>
      <el-icon :size="size" :color="color" class="edit-icon">
        <edit></edit>
      </el-icon>
      <img src="../assets/img/google.png" alt="google" />
    </div>
    <img src="../assets/img/66666.png" alt="icon" class="icon" />
  </div>
</template>

<script lang="ts" setup>
import { useStore } from 'vuex'
import { ref } from 'vue'
import {
  Edit
} from '@element-plus/icons-vue'
interface Profile {
  name: string
  email: string
  avatar: string
  roles: string
}

const store = useStore()
const state = store.state

const defaultProfile: Profile = {
  name: 'Yours Extra.',
  email: 'Loading...',
  avatar: 'Loading...',
  roles: 'Loading...',
}


const input = ref('')
const blur = () => {
  console.log(123)
}
const list = [1, 2, 3, 4].map(function (item) {
  return item * 2;
});
console.log(list);

console.log(Array.from('foo'));
const str = "Hello world";
console.log(str.includes("world"));


const size = 20
const color = 'red'
</script>

<style scoped lang="scss">
.container{
  display: flex;
  align-items: center;
}
.edit-icon {
  margin-right: 10px;
  margin-left: 10px;
}

</style>
