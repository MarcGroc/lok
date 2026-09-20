<script setup lang="ts">
defineProps<{ pageUrl: string }>()
</script>

<template>
  <aside class="facebook-feed" aria-label="Fanpage LOK Rzepiska na Facebooku">
    <div class="facebook-feed__intro">
      <p class="eyebrow">Facebook</p>
      <h3>Również na<br><em>fanpage’u.</em></h3>
      <p>Najnowsze wpisy publikujemy także na Facebooku.</p>
      <a class="facebook-feed__button" :href="pageUrl" target="_blank" rel="noopener noreferrer"><span
          aria-hidden="true">f</span> Odwiedź i polub nas na Facebooku <b aria-hidden="true">↗</b></a>
    </div>
  </aside>
</template>
