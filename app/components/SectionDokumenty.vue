<script setup lang="ts">
import {klub} from '~/data/klub'
</script>
<template>
  <section id="dokumenty" class="section documents-section" aria-labelledby="documents-title">
    <div class="container documents-grid">
      <div><p class="eyebrow eyebrow--light">Dokumenty</p>
        <h2 id="documents-title">Ważne rzeczy</h2>
        <p>Regulaminy i formularze udostępnimy tutaj, gdy będą gotowe do publikacji.</p></div>
      <div class="document-list">
        <div v-for="document in klub.documents" :key="document.title" class="document-row"><span class="document-icon">PDF</span><span>{{
            document.title
          }}</span><a v-if="document.available" :href="document.file" target="_blank" rel="noopener">Pobierz
          <span>↓</span></a><span v-else class="muted">do pobrania</span></div>
      </div>
    </div>
  </section>
</template>
