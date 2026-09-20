<script setup lang="ts">
import {klub} from '~/data/klub'
</script>
<template>
  <section id="kontakt" class="section contact-section" aria-labelledby="contact-title">
    <div class="container contact-grid">
      <div><p class="eyebrow">Kontakt</p>
        <h2 id="contact-title">Spotkajmy się<br><em>na strzelnicy.</em></h2>
        <p class="lead">Chcesz zacząć? Masz pytanie o trening? Daj nam znać.</p>
      </div>
      <address class="contact-card">
        <div><span>Adres</span><strong>{{ klub.contact.address || 'Dane lokalizacji w przygotowaniu' }}</strong></div>
        <div><span>Telefon</span><a v-if="klub.contact.phone" :href="`tel:${klub.contact.phone}`">{{
            klub.contact.phone
          }}</a><strong v-else>Wkrótce</strong></div>
        <div><span>E-mail</span><a v-if="klub.contact.email"
                                   :href="`mailto:${klub.contact.email}`">{{ klub.contact.email }}</a><strong v-else>Wkrótce</strong>
        </div>
        <div><span>Godziny</span><strong>{{ klub.contact.hours }}</strong></div>
      </address>
    </div>
  </section>
</template>
