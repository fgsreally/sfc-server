<script server lang="ts">
import { $ } from "sfc-server";

let req = $().post("/app", (req, res) => {
  res.end("111");
});
</script>

<script setup lang="ts">
import HelloWorld from "./components/HelloWorld.vue";

async function click() {
  let { data } = await req({ test: 1 });
  alert(data);
}
</script>

<template>
  <button @click="click">点击发送测试数据</button>
  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
