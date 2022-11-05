<script server lang="ts">
import { $ } from "sfc-server";

let req = $<string, string>("/test").post("/app", (req, res) => {
  res.end("111");
});
</script>

<script setup lang="ts">
import { ref } from "vue";

defineProps<{ msg: string }>();

async function click() {
  let { data } = await req("1");
  alert(data);
}
</script>

<template>
  <button type="button" @click="click">发送给子路由test/app</button>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
