<!--
 * @Author: 邱扬
 * @LastEditors: 邱扬
 * @description: page description
 * @Date: 2022-01-28 13:28:26
 * @LastEditTime: 2022-02-10 15:55:08
-->
<template>
  <div>
    <h1>{{ defaultProfile.name }}</h1>
    <router-link to="/child">跳转</router-link>
    <h1>vuex的state中的count：{{ state.count }}</h1>
    <button @click="state.count++">加一</button>
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
    <img src="../assets/img/12.jpg" alt="icon" class="icon" />
  </div>
</template>

<script lang="ts" setup>
import { defineComponent } from 'vue'
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
.icon {
  width: 100%;
}
</style>
