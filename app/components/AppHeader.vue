<script setup lang="ts">
import { klub } from '~/data/klub'
const isMenuOpen = ref(false)
const closeMenu = () => { isMenuOpen.value = false }
</script>

<template>
  <header class="site-header">
    <div class="container header-inner">
      <NuxtLink to="/" class="brand" aria-label="LOK Rzepiska — strona główna" @click="closeMenu">
        <img src="/zdjecia/logo-lok-rzepiska.png" alt="Logo LOK Rzepiska" class="brand-logo">
        <span><strong>LOK Rzepiska </strong></span>
      </NuxtLink>
      <button class="menu-toggle" type="button" :aria-expanded="isMenuOpen" aria-controls="main-nav" @click="isMenuOpen = !isMenuOpen"><span class="sr-only">{{ isMenuOpen ? 'Zamknij menu' : 'Otwórz menu' }}</span><i /><i /><i /></button>
      <nav id="main-nav" class="main-nav" :class="{ 'is-open': isMenuOpen }" aria-label="Główna nawigacja">
        <a v-for="item in klub.navigation" :key="item.href" :href="item.href" @click="closeMenu">{{ item.label }}</a>
        <a class="nav-cta" href="#nabor" @click="closeMenu">Dołącz do nas</a>
      </nav>
    </div>
  </header>
</template>
