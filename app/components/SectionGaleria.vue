<script setup lang="ts">
import {klub} from '~/data/klub'
</script>
<template>
  <section id="galeria" class="section gallery-section" aria-labelledby="gallery-title">
    <div class="container">
      <div class="section-heading">
        <div><p class="eyebrow eyebrow--light">Galeria</p>
          <h2 id="gallery-title">Zdjęcia<br><em>naszej pasji.</em></h2></div>
        <p>Tu pojawią się zdjęcia z treningów, wydarzeń i wspólnych spotkań.</p></div>
      <div v-if="klub.gallery.length" class="gallery-grid"><img v-for="photo in klub.gallery" :key="photo.src"
                                                                :src="photo.src" :alt="photo.alt" loading="lazy"></div>
      <div v-else class="gallery-empty"><span>✦</span>
        <p>Galeria rośnie razem z klubem.</p></div>
    </div>
  </section>
</template>
