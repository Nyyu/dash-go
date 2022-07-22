import {
  Box,
  HStack,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react"
import PaginationBtn from "./PaginationBtn"

interface PaginationProps {
  totalCountOfRegisters: number
  registersPerPage?: number
  currentPage?: number
  siblingCount?: number
  onPageChange: (page: number) => void
}

function generatePagesArray(from: number, to: number) {
  return [...new Array(to - from)]
    .map((_, index) => from + index + 1)
    .filter((page) => page > 0)
}

export default function Pagination({
  onPageChange,
  totalCountOfRegisters,
  siblingCount = 1,
  currentPage = 1,
  registersPerPage = 10,
}: PaginationProps) {
  const isWide = useBreakpointValue({
    base: false,
    lg: true,
  })

  const lastPageValue =
    totalCountOfRegisters / registersPerPage

  const lastPage = Math.floor(
    lastPageValue % 2 === 1
      ? lastPageValue + 1
      : lastPageValue
  )

  const previousPage =
    currentPage > 1
      ? generatePagesArray(
          currentPage - siblingCount - 1,
          currentPage - 1
        )
      : []
  const nextPage =
    currentPage < lastPage
      ? generatePagesArray(
          currentPage,
          Math.min(currentPage + siblingCount, lastPage)
        )
      : []

  return (
    <Stack
      spacing="6"
      align="center"
      justify="space-between"
      mt="8"
      direction={isWide ? "row" : "column"}
    >
      <Box>
        <Text>
          <strong>0</strong> - <strong>1</strong> de{" "}
          <strong>100</strong> registros
        </Text>
      </Box>

      <HStack align="center" spacing="2">
        {currentPage > 1 + siblingCount && (
          <>
            <PaginationBtn
              number={1}
              onPageChange={onPageChange}
            />
            {currentPage > 2 + siblingCount && (
              <Text
                color="gray.300"
                width={"8"}
                textAlign="center"
              >
                ...
              </Text>
            )}
          </>
        )}

        {previousPage.length > 0 &&
          previousPage.map((page) => (
            <>
              <PaginationBtn
                onPageChange={onPageChange}
                number={page}
                key={page}
              />
            </>
          ))}

        <PaginationBtn
          onPageChange={onPageChange}
          number={currentPage}
          isActive
        />

        {nextPage.length > 0 &&
          nextPage.map((page) => (
            <PaginationBtn
              onPageChange={onPageChange}
              number={page}
              key={page}
            />
          ))}

        {currentPage + siblingCount < lastPage && (
          <>
            {currentPage + siblingCount + 1 < lastPage && (
              <Text
                color="gray.300"
                width={"8"}
                textAlign="center"
              >
                ...
              </Text>
            )}
            <PaginationBtn
              onPageChange={onPageChange}
              number={lastPage}
            />
          </>
        )}
      </HStack>
    </Stack>
  )
}
