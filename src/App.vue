<!--
 * @Author: 邱扬
 * @LastEditors: 邱扬
 * @description: page description
 * @Date: 2022-01-28 13:28:26
 * @LastEditTime: 2022-02-10 15:54:05
-->
<template>
  <router-view v-slot="{ Component, route }">
    <component :is="Component" :key="route.path" />
  </router-view>
</template>
<script lang="ts" setup>

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
