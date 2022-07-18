import Link, { LinkProps } from 'next/link'
import { useRouter } from 'next/router'
import React, { cloneElement, ReactElement } from 'react'

interface ActiveLink extends LinkProps {
  children: ReactElement,
  matchExactPath?: boolean
}

export default function ActiveLink({ children, matchExactPath = false, ...rest }: ActiveLink) {
  let isActive = false
  const { asPath } = useRouter()

  if (
    !matchExactPath && (
      asPath.startsWith(String(rest.href))
    )
  ) isActive = true

  if (
    matchExactPath && (
      asPath === String(rest.href)
    )
  ) isActive = true

  return (
    <Link {...rest}>
      {cloneElement(children, {
        color: (isActive ? 'pink.500' : 'gray.60')
      })}
    </Link>
  )
}
