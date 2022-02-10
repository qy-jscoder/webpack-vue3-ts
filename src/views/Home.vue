<!--
 * @Author: 邱扬
 * @LastEditors: 邱扬
 * @description: page description
 * @Date: 2022-01-28 13:28:26
 * @LastEditTime: 2022-02-10 10:50:03
-->
<template>
  <div>
    <h1>{{ defaultProfile.name }}</h1>
    <router-link to="/child">跳转</router-link>
    <h1>vuex的state中的count：{{ state.count }}</h1>
    <button @click="state.count++">加一</button>
  </div>
</template>

<script lang="ts" setup>
import { defineComponent } from 'vue'
interface Profile {
  name: string
  email: string
  avatar: string
  roles: string
}
import { useStore } from 'vuex'
const store = useStore()
const state = store.state

const defaultProfile: Profile = {
  name: 'Yours Extra.',
  email: 'Loading...',
  avatar: 'Loading...',
  roles: 'Loading...',
}
</script>

<style scoped lang="scss"></style>
