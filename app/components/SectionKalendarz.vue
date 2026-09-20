<script setup lang="ts">
import {klub} from '~/data/klub'
</script>
<template>
  <section id="kalendarz" class="section calendar-section" aria-labelledby="calendar-title">
    <div class="container calendar-grid">
      <div><p class="eyebrow">Terminy</p>
        <h2 id="calendar-title">Zaznacz w<br><em>kalendarzu.</em></h2>
        <p>Najbliższe treningi, spotkania i wydarzenia publikujemy w jednym miejscu.</p></div>
      <GoogleCalendar v-if="klub.calendarUrl" :src="klub.calendarUrl"/>
      <div v-else class="calendar-placeholder">
        <div class="calendar-icon">▦</div>
        <h3>Tu bedzie kalndarz google</h3>
        <p>Publiczny kalendarz jest właśnie przygotowywany. Wróć tu wkrótce albo skontaktuj się z nami bezpośrednio.</p>
        <a class="button button--dark" href="#kontakt">Przejdź do kontaktu</a></div>
    </div>
  </section>
</template>
