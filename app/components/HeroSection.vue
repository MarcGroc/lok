<script setup lang="ts">
import {klub} from '~/data/klub'
</script>

<template>
  <section class="hero" aria-labelledby="hero-title">
    <div class="hero-mountains" aria-hidden="true" />
    <img class="hero-logo-mark" src="/zdjecia/logo-lok-rzepiska.png" alt="" aria-hidden="true">
    <div class="container hero-content"><p class="eyebrow eyebrow--light">Klub Strzelecki · Rzepiska</p>
      <h1 id="hero-title">{{ klub.claim }}</h1>
      <p class="hero-copy">2 zdania uzupełniające. Spotkajmy się na strzelnicy w Rzepiskach.</p>
      <div class="button-row"><a class="button button--primary" href="#nabor">Zostań członkiem <span>→</span></a><a
          class="button button--ghost" href="#strzelnica">Gdzie strzelamy</a></div>
      <div class="hero-note"><span class="target-dot"/> Bezpiecznie. Lokalnie. Z pasją.</div>
    </div>
    <div class="hero-mark" aria-hidden="true">✦</div>
  </section>
</template>
