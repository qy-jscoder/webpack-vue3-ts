<!--
 * @Author: 邱扬
 * @LastEditors: 邱扬
 * @description: page description
 * @Date: 2022-01-28 13:28:26
 * @LastEditTime: 2022-01-28 17:08:05
-->
<template>
  <div>
    <h1>{{defaultProfile.name}}</h1>
    <el-button>Default</el-button>
    <router-link to="/child">跳转</router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
 interface Profile {
  name: string
  email: string
  avatar: string
  roles: string
}
export default defineComponent({
  setup() {
    const defaultProfile: Profile = {
      name: 'Yours Extra.',
      email: 'Loading...',
      avatar: 'Loading...',
      roles: 'Loading...'
    }
    
    return { defaultProfile }
  }
})
</script>

<style scoped lang="scss"></style>
