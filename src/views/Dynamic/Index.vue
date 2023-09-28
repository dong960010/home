<template>
  <div id="dynamic">
    <Loading />
    <span style="color: #333">213</span>
  </div>
</template>

<script setup>
import Loading from "@/components/Loading.vue";
import { mainStore } from "@/store";
const store = mainStore();

onMounted(() => {
  setTimeout(() => {
    store.setImgLoadStatus(true);
  }, 800)
})
</script>

<style lang="scss" scoped>
  #dynamic {
    background-color: #fff;
  }
</style>