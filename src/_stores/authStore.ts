import { defineStore } from 'pinia'
import { authService } from '../_services/authService'
import type { LoginPayload, AuthResponse } from '@/types/auth'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: '' as string | null,
    expiresIn: 0,
    refreshToken: '' as string | null,
    userGuid: '' as string | null,
    profileGuid: '' as string | null,
    profileId: null as number | null,
    deviceGuid: '' as string | null,
  }),
  actions: {
    async login(payload: LoginPayload): Promise<void> {
      try {
        const response: AuthResponse = await authService.login(payload)

        this.token = response.token
        this.expiresIn = response.expiresIn
        this.refreshToken = response.refreshToken
        this.userGuid = response.userGuid
        this.profileGuid = response.profileGuid
        this.profileId = response.profileId
        this.deviceGuid = response.deviceGuid
        localStorage.setItem('token', this.token)
      } catch (error) {
        console.error('Erro ao fazer login:', error)
        throw error
      }
    },
    logout() {
      this.token = null
      this.expiresIn = 0
      this.refreshToken = null
      this.userGuid = null
      this.profileGuid = null
      this.profileId = null
      this.deviceGuid = null

      localStorage.removeItem('token')
    },
  },
})
