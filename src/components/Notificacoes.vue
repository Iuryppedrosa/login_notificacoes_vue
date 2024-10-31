<template>
  <div class="notification-card">
    <h3 @click="toggleExpand" class="notification-header">
      Veja as suas notificações
      <i
        :class="expand ? 'bi bi-chevron-up' : 'bi bi-chevron-down'"
        class="expand-icon"
      ></i>
    </h3>
    <div v-if="expand" class="notification-list">
      <div v-if="loading" class="text-center">Carregando...</div>
      <div v-if="!loading && notifications.length === 0" class="text-center">
        Nenhuma notificação encontrada.
      </div>
      <ul v-if="!loading && notifications.length > 0">
        <li
          v-for="notification in notifications"
          :key="notification.id"
          class="notification-item"
        >
          <i class="bi bi-bell-fill text-primary me-3"></i>
          <div>
            <h6 class="mb-1">{{ notification.title }}</h6>
            <p class="mb-0">{{ notification.message }}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
  <button @click="logout" class="btn btn-danger">Logout</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import {
  fetchNotifications,
  type Notification,
} from '../_services/notificationService'
import { useAuthStore } from '../_stores/authStore'

export default defineComponent({
  name: 'NotificacoesComponent',
  data() {
    return {
      notifications: [] as Notification[],
      loading: true,
      expand: false,
    }
  },
  methods: {
    async fetchNotifications() {
      try {
        const data = await fetchNotifications()
        this.notifications = data.items
      } catch (error) {
        console.error('Erro ao carregar notificações:', error)
      } finally {
        this.loading = false
      }
    },
    toggleExpand() {
      this.expand = !this.expand
    },
    async logout() {
      const authStore = useAuthStore()
      authStore.logout()
      this.$router.push('/login')
    },
  },
  mounted() {
    this.fetchNotifications()
  },
})
</script>

<style scoped>
.notification-card {
  max-width: 600px;
  margin: auto;
  background-color: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  border: 1px solid #ddd;
}

.notification-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  font-size: 1.2em;
  background-color: #41b883;
  color: white;
  cursor: pointer;
}

.expand-icon {
  font-size: 1.2em;
}

.notification-list {
  max-height: 300px;
  overflow-y: auto;
  padding: 16px;
  background-color: white;
}

.notification-item {
  display: flex;
  align-items: flex-start;
  padding: 12px;
  border-bottom: 1px solid #ddd;
}

.notification-item:last-child {
  border-bottom: none;
}

.notification-item i {
  font-size: 1.5em;
}

.btn {
  margin: 10px;
  padding: 10px 20px;
  font-size: 16px;
  width: 600px;
}
</style>
