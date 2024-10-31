export interface LoginPayload {
  login: string
  password: string
  deviceType: number
  scope: number
}

export interface AuthResponse {
  token: string
  expiresIn: number
  refreshToken: string
  userGuid: string
  profileGuid: string
  profileId: number
  deviceGuid: string
}
