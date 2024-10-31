<template>
  <div v-if="message" :class="['alert', alertClass]" role="alert">
    {{ message }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'FeedbackMessage',
  props: {
    message: {
      type: String,
      required: true,
    },
    isSuccess: {
      type: Boolean,
      required: true,
    },
  },
  computed: {
    alertClass(): string {
      return this.isSuccess ? 'alert-success' : 'alert-danger'
    },
  },
})
</script>

<style scoped>
.alert {
  padding: 0.75rem 1.25rem;
  margin-bottom: 1rem;
  border-radius: 0.25rem;
}
.alert-success {
  color: #155724;
  background-color: #d4edda;
  border: 1px solid #c3e6cb;
}
.alert-danger {
  color: #721c24;
  background-color: #f8d7da;
  border: 1px solid #f5c6cb;
}
</style>
