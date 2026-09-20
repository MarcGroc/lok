<script setup lang="ts">
import {klub} from '~/data/klub'
</script>
<template>
  <section id="aktualnosci" class="section section--light news-section" aria-labelledby="news-title">
    <div class="container">
      <div class="section-heading">
        <div><p class="eyebrow">Aktualności</p>
          <h2 id="news-title">Co u nas<br><em>słychać.</em></h2></div>
        <p>Najważniejsze informacje i komunikaty klubu, zawsze pod ręką.</p></div>
      <div class="news-list">
        <article v-for="entry in klub.news" :key="entry.title" class="news-card"><p class="news-meta">
          <span>{{ entry.category }}</span> · {{ entry.date }}</p>
          <h3>{{ entry.title }}</h3>
          <p>{{ entry.text }}</p></article>
      </div>
    </div>
  </section>
</template>
