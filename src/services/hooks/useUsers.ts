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

export async function getUsers(): Promise<Users[]> {
  const { data } = await api("users")

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

  return users
}

export async function useUsers() {
  return useQuery(["users"], getUsers, {
    staleTime: 1000 * 25, // 25 seconds
  })
}
