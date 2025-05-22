<template>
  <div class="d-flex vh-100">
    <Sidebar />
    <div class="flex-fill">
      <router-view />
    </div>
  </div>
</template>

<script setup lang="ts">
import Sidebar from "./components/sidebar.vue";
</script>
