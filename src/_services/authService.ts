import axios from 'axios'
import type { LoginPayload, AuthResponse } from '@/types/auth'

const API_URL = 'http://localhost:5000/v3/awards/auth'

export const authService = {
  async login(payload: LoginPayload): Promise<AuthResponse> {
    const response = await axios.post<AuthResponse>(API_URL, payload)
    return response.data
  },
}
