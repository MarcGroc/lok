<script setup lang="ts">
import {klub} from '~/data/klub'

const facebookUrl = computed(() => {
  const url = klub.contact.facebook?.trim()
  return url && /^https:\/\/(www\.)?facebook\.com\//i.test(url) ? url : null
})
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
      <FacebookFeed v-if="facebookUrl" :page-url="facebookUrl" />
    </div>
  </section>
</template>
