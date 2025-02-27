export interface UserInfo {
  id: number
  nickname: string
  email: string
  token: {
    accessToken: string
    refreshToken: string
    grantType: string
    expiresIn: number
  }
}
