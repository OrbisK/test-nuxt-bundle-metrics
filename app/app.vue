<script setup lang="ts">
import { bloat } from '~/utils/bloat'

const bloatSize = bloat.reduce((sum, s) => sum + s.length, 0)
</script>

<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtWelcome />
    <p>Bloat: {{ bloatSize }} chars</p>
  </div>
</template>
