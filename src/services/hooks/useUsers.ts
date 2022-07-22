import {
  useQuery,
  UseQueryResult,
} from "@tanstack/react-query"
import { api } from "../api"

export interface Users {
  id: string
  nome: string
  email: string
  createdAt: string
}

export interface GetUserPromiseProps {
  users: Users[]
  totalCount: number
}

export async function getUsers(
  page: number
): Promise<GetUserPromiseProps> {
  const { data, headers } = await api("users", {
    params: {
      page,
    },
  })

  const totalCount = Number(headers["x-total-count"])

  const users = data.users.models.map(
    ({ id, nome, email, createdAt }: any) => ({
      id,
      nome,
      email,
      createdAt: new Date(createdAt).toLocaleDateString(
        "pt-BR",
        {
          day: "2-digit",
          month: "long",
          year: "numeric",
        }
      ),
    })
  )

  return {
    users,
    totalCount,
  }
}

export async function useUsers(page: number) {
  return useQuery(["users", page], () => getUsers(page), {
    staleTime: 1000 * 25, // 25 seconds
  })
}
