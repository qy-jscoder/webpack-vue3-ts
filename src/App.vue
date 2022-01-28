<!--
 * @Author: 邱扬
 * @LastEditors: 邱扬
 * @description: page description
 * @Date: 2022-01-28 13:28:26
 * @LastEditTime: 2022-01-28 18:15:33
-->
<template>
    <router-view v-slot="{ Component, route }">
        <component :is="Component" :key="route.path" />
    </router-view>
</template>
<script lang="ts">
export default {
  setup() {
    return {
    }
  },
}
</script>
<style lang="scss" scoped>
</style>

