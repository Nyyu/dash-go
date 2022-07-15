import { Icon, Link, LinkProps, Text } from '@chakra-ui/react'
import React, { ElementType } from 'react'

interface SideBarLinkProps extends LinkProps {
  icon: ElementType
  title: string
}

export default function SideBarLink({ icon, title, ...rest }: SideBarLinkProps) {
  return (
    <Link display='flex' alignItems='center' {...rest}>
      <Icon as={icon} fontSize='20' />
      <Text fontWeight='medium' ml='4'>{title}</Text>
    </Link>
  )
}
