import type { AppProps } from "next/app"

import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"

import { SidebarDrawerProvider } from "../context/SidebarDrawerContext"
import { ChakraProvider } from "@chakra-ui/react"
import { theme } from "../styles/theme"

import { makeServer } from "../services/mirage"

if (process.env.NODE_ENV === "development") {
  try {
    makeServer()
  } catch (error) {
    console.log(error)
  }
}

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <SidebarDrawerProvider>
          <Component {...pageProps} />
        </SidebarDrawerProvider>
      </ChakraProvider>
      <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
  )
}

export default MyApp
