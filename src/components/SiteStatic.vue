<template>
  <div id="site-static">
    <div class="card-static cards">
      <Icon size="16">
        <QuoteLeft />
      </Icon>
      <table width="100%" border="0" cellspacing="0" cellpadding="0" class="table">
        <tbody>
          <tr v-for="item in statics" :key="item.label">
            <td>{{ item.label }}</td>
            <td class="led">{{ item.value }}</td>
          </tr>
        </tbody>
      </table>
      <Icon size="16">
        <QuoteRight />
      </Icon>
    </div>
  </div>
</template>

<script setup>
import { Icon } from "@vicons/utils";
import { QuoteLeft, QuoteRight } from "@vicons/fa";
import { siteDateStatistics } from "@/utils/getTime.js";
const startDate = ref(import.meta.env.VITE_SITE_START);
const runTime = ref(null);
const statics = ref([
  { label: "建站伊始", value: "2023/07/15" },
  { label: "进站统计", value: "613" },
  { label: "本站运行时长", value: runTime },
]);

onMounted(() => {
  runTime.value = siteDateStatistics(new Date(startDate.value));
});
</script>

<style lang="scss" scoped>
.card-static {
  display: flex;
  padding: 1rem;
  max-width: 460px;
  margin-top: 20px;
  animation: fade 0.5s;

  & tr:not(:last-of-type) {
    border-bottom: 1px solid rgba(255, 255, 255, .2);
  }
  & td {
    text-align: center;
    line-height: 38px;
  }
  & .led {
    letter-spacing: 2px;
    font-family: "UnidreamLED";
  }
  & .xicon:last-of-type {
    align-self: flex-end;
  }
}
</style>