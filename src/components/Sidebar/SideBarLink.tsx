import { Icon, Link as ChakraLink, LinkProps, Text } from '@chakra-ui/react'
import React, { ElementType } from 'react'
import ActiveLink from '../ActiveLink'

interface SideBarLinkProps extends LinkProps {
  icon: ElementType
  title: string
  href: string
}

export default function SideBarLink({ icon, title, href, ...rest }: SideBarLinkProps) {
  return (
    <ActiveLink href={href} passHref>
      <ChakraLink display='flex' alignItems='center' {...rest}>
        <Icon as={icon} fontSize='20' />
        <Text fontWeight='medium' ml='4'>{title}</Text>
      </ChakraLink>
    </ActiveLink>
  )
}
