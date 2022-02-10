<!--
 * @Author: 邱扬
 * @LastEditors: 邱扬
 * @description: page description
 * @Date: 2022-01-28 13:28:26
 * @LastEditTime: 2022-02-10 14:02:54
-->
<template>
  <router-view v-slot="{ Component, route }">
    <component :is="Component" :key="route.path" />
  </router-view>
  <el-input v-model="input" placeholder="Please input" @blur="blur" style="margin-top:10px"/>
  <el-button type="text">Text Button</el-button>
  <el-row>
    <el-icon :size="size" :color="color">
      <edit></edit>
    </el-icon>
  </el-row>
  <img src="./assets/img/12.jpg" alt="">
</template>
<script lang="ts" setup>
import {
  Search,
  Edit,
  Check,
  Message,
  Star,
  Delete,
} from '@element-plus/icons-vue'
import { ref } from 'vue'

const input = ref('')
const blur = () => {
  console.log(123)
}
const size=20
const color='red'
</script>
<style lang="scss" scoped>
:root {
  --el-color-primary: #409eff;
  --el-color-success: #67c23a;
  --el-color-warning: #e6a23c;
  --el-color-danger: #f56c6c;
  --el-color-error: #f56c6c;
  --el-color-info: #909399;
}
</style>
