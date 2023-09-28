<template>
  <div :class="store.mobileOpenState ? 'left hidden' : 'left'">
    <Message />
    <SiteStatics />
  </div>
</template>

<script setup>
import { mainStore } from "@/store";
import Message from "@/components/Message.vue";
import SiteStatics from "@/components/SiteStatic.vue";
const store = mainStore();
</script>

<style lang="scss" scoped>
.left {
  // flex: 1 0 0%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 50%;
  margin-right: 10px;
  &.hidden {
    display: none;
  }
  @media (max-width: 720px) {
    margin-right: 0;
    width: 100%;
  }
}
</style>
