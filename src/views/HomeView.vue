<template>
  <main>
    <Notificacoes />
  </main>
</template>
<script lang="ts">
import Notificacoes from '../components/Notificacoes.vue'
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'HomeView',
  components: {
    Notificacoes,
  },
})
</script>
