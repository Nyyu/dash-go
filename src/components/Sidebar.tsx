import { Box, Icon, Link, Stack, Text } from "@chakra-ui/react"
import React from 'react'
import { RiContactsLine, RiDashboardLine, RiInputMethodLine, RiGitMergeLine } from "react-icons/ri"

export default function Sidebar() {
  return (
    <Box
      as='aside'
      w='64'
      mr='8'
    >
      <Stack align='flex-start' spacing='12'>
        <Box>
          <Text
            fontWeight='bold'
            color='gray.400'
            fontSize='small'
          >GENERAL</Text>
          <Stack
            spacing='4'
            mt='8'
            align='stretch'
          >
            <Link display='flex' alignItems='center'>
              <Icon as={RiDashboardLine} fontSize='20' />
              <Text fontWeight='medium' ml='4'>Dashboard</Text>
            </Link>

            <Link display='flex' alignItems='center'>
              <Icon as={RiContactsLine} fontSize='20' />
              <Text fontWeight='medium' ml='4'>Users</Text>
            </Link>
          </Stack>
        </Box>

        <Box>
          <Text
            fontWeight='bold'
            color='gray.400'
            fontSize='small'
            textTransform='uppercase'
          >Automation</Text>
          <Stack
            spacing='4'
            mt='8'
            align='stretch'
          >
            <Link display='flex' alignItems='center'>
              <Icon as={RiInputMethodLine} fontSize='20' />
              <Text fontWeight='medium' ml='4'>Forms</Text>
            </Link>

            <Link display='flex' alignItems='center'>
              <Icon as={RiGitMergeLine} fontSize='20' />
              <Text fontWeight='medium' ml='4'>Automation</Text>
            </Link>
          </Stack>
        </Box>
      </Stack>
    </Box>
  )
}
