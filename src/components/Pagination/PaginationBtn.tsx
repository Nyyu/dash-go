import { Button } from "@chakra-ui/react"

interface PaginationBtnProps {
  number: number
  isActive?: boolean
  onPageChange: (page: number) => void
}

export default function PaginationBtn({
  number,
  isActive = false,
  onPageChange,
}: PaginationBtnProps) {
  return isActive ? (
    <Button
      size="sm"
      fontSize="xs"
      w="4"
      colorScheme="pink"
      disabled
      _disabled={{
        bg: "pink.500",
        cursor: "default",
      }}
    >
      {number}
    </Button>
  ) : (
    <Button
      size="sm"
      fontSize="xs"
      w="4"
      bg="gray.700"
      _hover={{
        bg: "gray.500",
      }}
      onClick={() => onPageChange(number)}
    >
      {number}
    </Button>
  )
}
