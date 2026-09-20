<script setup lang="ts">
defineProps<{ src: string }>()
</script>
<template><iframe class="calendar-frame" :src="src" title="Kalendarz klubu LOK Rzepiska" loading="lazy" /></template>
