<template>
  <div id="app" class="bg-gray-500 min-h-screen">
    <STabs>
      <STab>sansil</STab>
      <STab>sansile</STab>
    </STabs>
  </div>
</template>

<script>
import STabs from "@/components/STabs.vue";
import STab from "@/components/STab.vue";
export default {
  name: "App",
  components: {
    STabs,
    STab,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
