<script setup>
import Console from './Console.vue';
import { onMounted } from 'vue';

onMounted(() => {
  document.addEventListener('visibilitychange', handleVisibilityChange);
});

const handleVisibilityChange = () => {
  if (document.hidden) {
    document.title = "Hé reviens !";
  } else {
    document.title = "Ilan - Portfolio";
  }
};
</script>

<template>

    <div class="page">
        <h1>Ilan OUTHIER</h1>
        <Console/>
    </div>


</template>

<style scoped>

    .page{
        height: 100vh;
        display: grid;
        place-items: center;
    }
</style>