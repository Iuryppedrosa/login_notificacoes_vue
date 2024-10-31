<template>
  <div class="px-4 py-5 px-md-5 text-center text-lg-start">
    <div class="container">
      <div class="row gx-lg-5 align-items-center">
        <div class="col-lg-12 mb-5 mb-lg-0">
          <div class="card">
            <div class="card-body py-5 px-md-5">
              <form @submit.prevent="handleLogin">
                <div data-mdb-input-init class="form-outline mb-4">
                  <input
                    type="text"
                    id="form3Example3"
                    class="form-control"
                    v-model="form.login"
                  />
                  <label class="form-label" for="login">Login</label>
                </div>

                <div data-mdb-input-init class="form-outline mb-4">
                  <input
                    v-model="form.password"
                    type="password"
                    id="form3Example4"
                    class="form-control"
                    required
                  />
                  <label class="form-label" for="login">Senha</label>
                </div>

                <div class="d-flex justify-content-center mb-4">
                  <button
                    type="submit"
                    data-mdb-button-init
                    data-mdb-ripple-init
                    class="btn btn-primary"
                  >
                    Login
                  </button>
                </div>
              </form>
              <FeedbackMessage
                v-if="feedbackMessage"
                :message="feedbackMessage"
                :isSuccess="isLoginSuccessfull"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useAuthStore } from '../_stores/authStore'
import type { LoginPayload } from '../types/auth'
import FeedbackMessage from '../components/FeedbackMessage.vue'

export default defineComponent({
  name: 'LoginView',
  components: {
    FeedbackMessage,
  },
  data() {
    return {
      form: {
        login: '',
        password: '',
        deviceType: 2,
        scope: 6,
      },
      feedbackMessage: '',
      isLoginSuccessfull: false,
    }
  },
  methods: {
    async handleLogin() {
      const authStore = useAuthStore()
      try {
        await authStore.login(this.form as LoginPayload)
        this.feedbackMessage = 'Login efetuado com sucesso!'
        this.isLoginSuccessfull = true
        this.$router.push('/notificacoes')
      } catch (error) {
        this.feedbackMessage = 'Erro ao efetuar o login!'
        this.isLoginSuccessfull = false
        console.error(error)
      }
    },
  },
})
</script>

<style></style>
