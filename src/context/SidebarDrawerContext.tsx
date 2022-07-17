import { useDisclosure, UseDisclosureReturn } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react'

interface SidebarDrawerProviderProps {
  children: ReactNode
}

const SidebarDrawerContext = createContext({} as UseDisclosureReturn)

export function SidebarDrawerProvider({ children }: SidebarDrawerProviderProps) {
  const disclosure = useDisclosure()
  const { asPath } = useRouter()

  useEffect(() => {
    disclosure.onClose()
    //eslint-disable-next-line
  }, [asPath])

  return (
    <SidebarDrawerContext.Provider value={disclosure}>
      {children}
    </SidebarDrawerContext.Provider>
  )
}

export const useSidebarDrawer = () => useContext(SidebarDrawerContext)