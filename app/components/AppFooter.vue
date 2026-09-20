<script setup lang="ts">
import {klub} from '~/data/klub'
</script>

<template>
  <footer class="site-footer">
    <div class="container footer-grid">
      <div>
        <NuxtLink to="/" class="brand brand--footer"><img src="/zdjecia/logo-lok-rzepiska.png" alt=""
                                                          class="brand-logo"><span><strong>LOK</strong> Rzepiska</span>
        </NuxtLink>
        <p>{{ klub.description }}</p></div>
      <div><h2>Na skróty</h2><a v-for="item in klub.navigation" :key="item.href" :href="item.href">{{ item.label }}</a>
      </div>
      <div><h2>Kontakt</h2>
        <p v-if="klub.contact.address">{{ klub.contact.address }}</p>
        <p v-else>Pełne dane kontaktowe wkrótce.</p><a v-if="klub.contact.email" :href="`mailto:${klub.contact.email}`">{{
            klub.contact.email
          }}</a></div>
    </div>
    <div class="container footer-bottom"><span>© {{ new Date().getFullYear() }} {{ klub.name }}</span>
    </div>
  </footer>
</template>
