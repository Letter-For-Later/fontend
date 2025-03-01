export const useApi = async (endPoint: string, method: 'GET' | 'POST' | 'PUT' | 'DELETE') => {
  const config = useRuntimeConfig()
  const BASE_URL = config.public.baseUrl

  try {
    let response = await fetch(`${BASE_URL}/${endPoint}`, {
      method: method,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${useCookie('accessToken').value}`,
      },
    })

    if (response.status === 401 || response.status === 403) {
      await refreshToken()
      response = await fetch(`${BASE_URL}/${endPoint}`, {
        method: method,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${useCookie('accessToken').value}`,
        },
      })
    }

    const result = response.ok ? await response.json() : null
    return result
  } catch (error) {
    console.error(error)
  }
}

export const refreshToken = async () => {
  const config = useRuntimeConfig()
  const BASE_URL = config.public.baseUrl
  const refreshToken = useCookie('refreshToken').value
  const response = await fetch(`${BASE_URL}/api/users/token/refresh?refreshToken=${refreshToken}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })

  if (response.status === 200) {
    const result = await response.json()
    useCookie('accessToken').value = result.accessToken
    useCookie('refresh').value = result.refreshToken
    console.log('리프레쉬 토큰 발급 성공')
  } else {
    console.error('Failed to refresh token')
    throw new Error('Failed to refresh token')
  }
}
