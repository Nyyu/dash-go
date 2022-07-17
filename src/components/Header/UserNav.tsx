import { Avatar, Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'

interface UserNavProps {
  showProfileDetails?: boolean
}

export default function UserNav({ showProfileDetails = true }: UserNavProps) {
  return (
    <Flex
      align='center'
    >
      {showProfileDetails && (
        <Box mr='4' textAlign='right' >
          <Text>NyuuSz</Text>
          <Text color='gray.300' fontSize='small' >nyyu.dev@gmail.com</Text>
        </Box>
      )}
      <Avatar size='md' name="NyuuSz" src="https://github.com/Nyyu.png" />
    </Flex>
  )
}
