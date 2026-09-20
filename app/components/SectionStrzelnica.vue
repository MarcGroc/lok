<script setup lang="ts">
import {klub} from '~/data/klub'
</script>

<template>
  <section id="strzelnica" class="section section--dark range-section" aria-labelledby="range-title">
    <div class="container">
      <div class="section-heading">
        <div><p class="eyebrow eyebrow--light">Strzelnica</p>
          <h2 id="range-title">Miejsce, gdzie<br><em>skupienie ma znaczenie.</em></h2></div>
        <p>Organizujemy treningi i spotkania dla osób, które chcą rozwijać się w strzelectwie w bezpiecznych
          warunkach.</p></div>
      <div class="range-layout">
        <div class="range-visual" aria-hidden="true">
          <div class="mountain-line"/>
          <div class="target target--large"><i/><i/><i/><b/></div>
        </div>
        <div class="range-details">
          <div class="feature-card"><span class="feature-number">01</span>
            <div><h3>Strzelnica wirtualna</h3>
              <p>Mobilny system laserowy dla każdego. coś tam coś tam</p></div>
          </div>
          <div class="feature-card"><span class="feature-number">02</span>
            <div><h3>Strzelnica kulowa(ostra)</h3>
              <p>Karabiny, pistolety, strzelby. coś tam coś tam</p></div>
          </div>
          <div class="stats" aria-label="Parametry strzelnicy wirtualnej">
            <div v-for="stat in klub.stats" :key="stat.label"><strong>{{ stat.value }}</strong><span>{{
                stat.label
              }}</span></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
