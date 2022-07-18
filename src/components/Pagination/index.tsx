import { Box, Button, HStack, Stack, Text, useBreakpointValue } from "@chakra-ui/react"
import PaginationBtn from "./PaginationBtn"

export default function Pagination() {
  const isWide = useBreakpointValue({
    base: false,
    lg: true
  })

  return (
    <Stack
      spacing='6'
      align='center'
      justify='space-between'
      mt='8'
      direction={(isWide ? 'row' : 'column')}
    >
      <Box>
        <Text><strong>0</strong> - <strong>1</strong> de <strong>100</strong> registros</Text>
      </Box>

      <HStack align='center' spacing='2'>
        <PaginationBtn isActive number={1} />
        <PaginationBtn number={2} />
        <PaginationBtn number={3} />
        <PaginationBtn number={4} />
      </HStack>
    </Stack >
  )
}
