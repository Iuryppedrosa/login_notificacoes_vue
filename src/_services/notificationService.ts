import axios from 'axios'

export interface Notification {
  id: string
  title: string
  message: string
  // Defina outros campos de acordo com o response
}

export interface PageableResult<T> {
  items: T[]
  total: number
  page: number
  pageSize: number
}

export const fetchNotifications = async (
  page = 1,
): Promise<PageableResult<Notification>> => {
  const response = await axios.get(
    `https://api.gamefic.me/api/broker/notifications?page=${page}`,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`, // Adiciona o token do login
      },
    },
  )
  return response.data
}
